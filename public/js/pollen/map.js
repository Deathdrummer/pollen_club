$(document).ready(() => {
    //  Манипулации, чтобы растянуть карту на всё окно
    let _w = $(window);
    _w.on('resize', () => {
        $('#map-container').css('height', window.innerHeight)
    });
    $('body').css('height', window.innerHeight);
    _w.trigger('resize');
    // -- Манипуляции

    let apiUrl = 'https://api.pollen.club'; // Адрес API
    let mapDivId = 'map-view';              // id блочного элемента, в который подгружается карта (не селектор!)
    let playDelay = 1000;                    // Задержка между "кадрами" при проигрывании
    let minDelay = 125;
    let maxDelay = 4000;

    let playerContainer = $('#player');
    let allergenSelect = $('select[name="allergen"]');
    let hourDelta = $('#hour-delta');
    let hourDeltaInfo = $('#hour-delta-info');
    let playButton = $('#play-button');
    let pauseButton = $('#pause-button');
    let fasterButton = $('#faster-button');
    let slowerButton = $('#slower-button');
    let speedInfo = $('#speed-info');
    let progressInfo = $('#progress');

    let pollenMap = L.map(mapDivId, {zoomControl: false})  // Подключение карты Leaflet
        .fitBounds([[50, 28], [60, 38]]);  // Более обширный обзор
    //.setView([55.752, 37.616], 8);   // Москва

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {   // Подложка
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(pollenMap);

    let layers = {};        // [Количество слоёв] = [количество аллергенов] × [количество временных отметок]
                            // В качестве ключей выбрана конкатенация [Имя аллергена] + [временная отметка]
    let activeLayer = null; // Текущий активный слой
    let geoJsonPath;        // Часть пути с расположением данных geoJson
    let intervalPath;       // Часть пути с расположением временных отметок
    let playerOn = false;   // Отслеживание плеера
    let progress = -1;
    let progressMin = -1;
    let progressMax = 1;
    let progressStep = 1;

    let switchFrame = (key) => {
        if (activeLayer !== null) {  // При первом вызове функции активный слой не определён
            activeLayer.removeFrom(pollenMap);
        }
        activeLayer = layers[key].addTo(pollenMap);
    };

    let increaseProgress = () => {
        progress += progressStep;
        // if (progress >= progressMax) {
        //     progressInfo.attr('aria-valuenow', progressMin);
        // } else {
        progressInfo.attr('aria-valuenow', progress);
        // }
        let dataNow = progressInfo.attr('aria-valuenow'),
            dataMin = progressInfo.attr('aria-valuemin'),
            dataMax = progressInfo.attr('aria-valuemax');
        progressInfo.css('width', '' + (100 - (dataNow - dataMin) / (dataMax - dataMin) * 100) + '%');

    };

    let preloadFrames = (allergenName, allergenPath) => {
        progress = progressMin;
        for (let hd = parseInt(hourDelta.attr('min')); hd <= parseInt(hourDelta.attr('max')); hd += parseInt(hourDelta.attr('step'))) {
            let key = allergenName + hd;
            if (layers[key] === null) {               // Создание слоя при первом обращении к нему и подгрузка данных
                layers[key] = L.layerGroup();
                let forecastPath = intervalPath[hd.toString()];
                $.ajax({
                    cache: false,         // чтобы избежать закешированного прогноза днём ранее
                    url: apiUrl + geoJsonPath + allergenPath + forecastPath,
                    dataType: 'json',
                    success: (jsonData) => {
                        $.each(jsonData, (MPIndex, MultiPolygon) => {
                            L.polygon(MultiPolygon['latlngs'], {
                                color: MultiPolygon['color'],
                                fillColor: MultiPolygon['fillColor'],
                                fillOpacity: 0.2,
                                opacity: MultiPolygon['opacity'],
                                weight: MultiPolygon['weight']
                            }).addTo(layers[key]);
                        });
                        increaseProgress();
                    }  // --success
                });  // --$.ajax
            }
        }
    };

    let updateMap = () => {
        /* Функция обновления содержимого карты. Запускается при выборе аллергена и смене временной отмети */

        let allergenName = allergenSelect.children('option:selected').html();
        let hourDeltaValue = hourDelta.val();
        let key = allergenName + hourDeltaValue;  // конкатенация [Имя аллергена] + [временная отметка]
        if (layers[key] === null) {               // Создание слоя при первом обращении к нему и подгрузка данных
            layers[key] = L.layerGroup();
            let allergenPath = allergenSelect.val();
            let forecastPath = intervalPath[hourDeltaValue];
            $.ajax({
                cache: false,         // чтобы избежать закешированного прогноза днём ранее
                url: apiUrl + geoJsonPath + allergenPath + forecastPath,
                dataType: 'json',
                beforeSend: () => {   // Отключаем ползунок и выбор аллергена на время запроса
                    if (!playerOn) {  // При включенном плеере не реагировать
                        allergenSelect.prop('disabled', true);
                        hourDelta.prop('disabled', true);
                    }
                }, // --beforeSend
                complete: () => {     // Включаем ползунок и выбор аллергена по окончании запроса
                    if (!playerOn) {  // При включенном плеере не реагировать
                        allergenSelect.prop('disabled', false);
                        hourDelta.prop('disabled', false);
                    }
                }, // --complete
                success: (jsonData) => {
                    $.each(jsonData, (MPIndex, MultiPolygon) => {
                        L.polygon(MultiPolygon['latlngs'], {
                            color: MultiPolygon['color'],
                            fillColor: MultiPolygon['fillColor'],
                            fillOpacity: 0.2,
                            opacity: MultiPolygon['opacity'],
                            weight: MultiPolygon['weight']
                        }).addTo(layers[key]);
                    });
                    switchFrame(key);
                }  // --success
            });  // --$.ajax

        } else {
            switchFrame(key);
        }
    };

    let updateSpeedInfo = () => {
        speedInfo.html('' + 1000 / playDelay + ' к/сек');
    };

    let play = () => {
        /* Функция проигрывания временных отступов */

        if (playerOn) {
            let hourDeltaMin = parseInt(hourDelta.attr('min'));
            let hourDeltaMax = parseInt(hourDelta.attr('max'));
            let hourDeltaStep = parseInt(hourDelta.attr('step'));
            let hourDeltaVal = parseInt(hourDelta.val());
            let nextVal;
            if (hourDeltaVal === hourDeltaMax) {
                nextVal = hourDeltaMin;
            } else {
                nextVal = hourDeltaVal + hourDeltaStep;
            }
            hourDelta.val(nextVal);
            hourDelta.trigger('input');   // Меняет подпись временной отметки
            hourDelta.trigger('change');  // Обновляет содержимое карты
            setTimeout(play, playDelay);
        }
    };

    slowerButton.on('click', () => {
        if (playDelay < maxDelay) {
            playDelay *= 2;
            updateSpeedInfo();
        }
    });
    fasterButton.on('click', () => {
        if (playDelay > minDelay) {
            playDelay /= 2;
            updateSpeedInfo();
        }
    });
    playButton.on('click', () => {
        if (!playerOn) {
            allergenSelect.prop('disabled', true);
            hourDelta.prop('disabled', true);
            playerContainer.addClass('on');
            playerOn = true;
            play();
        }
    });
    pauseButton.on('click', () => {
        if (playerOn) {
            allergenSelect.prop('disabled', false);
            hourDelta.prop('disabled', false);
            playerContainer.removeClass('on');
            playerOn = false;
        }
    });

    allergenSelect.on('change', () => {
        let selectedOption = allergenSelect.children('option:selected');
        preloadFrames(selectedOption.html(), selectedOption.val());
        updateMap();
    });
    //hourDelta.on('change', updateMap);
    hourDelta.on('input', () => {
        let val = hourDelta.val();
        if (parseInt(val) > 0)
            val = '+' + val;
        hourDeltaInfo.html(val);
        updateMap();
    });

    $.ajax({  // Запрос прогнозов
        cache: false,
        url: apiUrl + '/ajax/get_forecasts',
        dataType: 'json',
        success: (jsonData) => {
            intervalPath = jsonData['intervalPath'];
            $.each(jsonData['allergens'], (index, item) => {
                allergenSelect.append('<option value="/' + item + '">' + item + '</option>');
                $.each(jsonData['intervalPath'], (key, value) => {
                    layers[item + key] = null;
                });
            });
            let intervalData = jsonData['interval'];
            hourDelta.attr({
                min: intervalData[0],
                max: intervalData[1],
                step: intervalData[2]
            });
            progressMin = intervalData[0];
            progressMax = intervalData[1];
            progressStep = intervalData[2];
            progressInfo.attr('aria-valuenow', progressMax);
            progressInfo.attr('aria-valuemin', progressMin);
            progressInfo.attr('aria-valuemax', progressMax);
            geoJsonPath = jsonData['root'];

            allergenSelect.trigger('change');
            hourDelta.trigger('input');
        }  // --success
    });
    updateSpeedInfo();
});
