$(document).ready(function () {
  // Скрипт для Бургер-меню
  const menuBtns = [...document.querySelectorAll('.menu-btn')];
  const menu = document.querySelector('.aside-block__bottom');
  const html = document.querySelector('html');
  const main = document.querySelector('main');
  const header = document.querySelector('.aside');
  function toggleMenu() {
    menuBtns.forEach(btn => {
      btn.classList.toggle('active');
    });
    menu.classList.toggle('active');
    header.classList.toggle('active');
    main.classList.toggle('menu-show');
    html.classList.toggle('hidden');
  }

  function closeMenu() {
    menuBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    menu.classList.remove('active');
    header.classList.remove('active');
    main.classList.remove('menu-show');
    html.classList.remove('hidden');
  }

  function handleClickOutsideMenu(event) {
    if (!menu.contains(event.target) && !menuBtns.some(btn => btn.contains(event.target))) {
      closeMenu();
    }
  }

  menuBtns.forEach(btn => {
    btn.addEventListener('click', toggleMenu);
  });
  main.addEventListener('click', handleClickOutsideMenu);
  // header.addEventListener('click', handleClickOutsideMenu);
  var swiperSliderNewsMain = new Swiper('.main-sections .news-gallery .swiper-container', {
    slidesPerView: 1.2,
    mousewheel: true,
    spaceBetween: 10,
    variableWidth: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: { slidesPerView: 1.2 },
      1440: { slidesPerView: 2 },
      1920: { slidesPerView: 3 },
    },
  });
  var swiperSliderScreens = new Swiper('.content-main__slider .swiper-container', {
    slidesPerView: 1,
    mousewheel: true,

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
  var swiperSliderSingle = new Swiper('.single-gallery .swiper-container', {
    slidesPerView: 1.2,
    mousewheel: true,
    spaceBetween: 10,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  var swiperSliderAbout = new Swiper('.about .achievements-list', {
    slidesPerView: 1.2,
    mousewheel: true,
    spaceBetween: 18,

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
  var swiperSliderAchievements = new Swiper('.achievements-list.achievements-slider', {
    slidesPerView: 1.2,
    mousewheel: true,
    spaceBetween: 18,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 5,
      },
    },
  });

  var swiperSliderNews = new Swiper('.news-gallery-wrapper .news-gallery .swiper-container', {
    slidesPerView: 1.2,
    mousewheel: true,
    spaceBetween: 10,

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1540: {
        slidesPerView: 4,
      },
      1920: {
        slidesPerView: 5,
      },
    },
  });

  // рекламный баннер

  const currentDate = new Date().toDateString();
  const savedDate = localStorage.getItem('bannerDate');

  /* Function for working with the modal */
  function bannerModal() {
    const m = document.getElementById('bannerModal');
    const image = document.getElementById('bannerModalImage');
    const linkDecktop = document.getElementById('bannerModalDesktop')?.value;
    const linkMobile = document.getElementById('bannerModalMobile')?.value;
    const winW = window.outerWidth;

    return {
      showModal() {
        if (image) {
          image.setAttribute('src', winW < 768 ? linkMobile : linkDecktop);

          const i = new Image();
          const imageSrc = image.getAttribute('src');
          i.onload = () => m.classList.add('modal_visible');
          i.src = imageSrc;
        }
      },
      hideModal() {
        if (m) m.classList.remove('modal_visible');
      },
    };
  }

  // Show banner after time if the banner has not been clicked
  let hideTimeout;
  const modal = bannerModal();
  if (currentDate !== savedDate) {
    setTimeout(() => {
      modal.showModal();
      setTimeout(() => {
        modal.hideModal();
        localStorage.setItem('bannerDate', currentDate);
      }, 12000);
    }, 2);
  }

  document.querySelectorAll('.banner-link').forEach(function (link) {
    link.addEventListener('click', function () {
      clearTimeout(hideTimeout);
      localStorage.setItem('bannerDate', currentDate);
      modal.hideModal();
    });
  });

  // поиск
  let search = $('.search');
  let searchClose = $('.search-close');
  let searchInput = $('.search input');

  searchInput.on('input', function () {
    var value = $(this).val();
    const searchResult = $('.search-result');
    searchClose.toggleClass('val', value.length > 0);

    $.ajax({
      type: 'GET',
      url: '/ajax/search_products',
      dataType: 'json',
      data: {
        field: 'title',
        value: value,
        returnFields: ['title', 'seo_url'],
      },
      beforeSend: function () {},
      success: function (r) {
        if (value.length > 0 && r.data.length > 0) {
          search.addClass('invalid');
          searchResult.html(`
                <ul>
                    ${r.data
                      .map(
                        item => `
                        <li><a href="/${item.seo_url}">${item.title}</a></li>
                    `
                      )
                      .join('')}
                </ul>
            `);
        } else {
          search.removeClass('invalid');
        }
        if (r.data.length === 0) {
          search.addClass('noinvalid');
          searchResult.html(`
                <ul>
                  <li><span>Ничего не найдено</span></li>
                </ul>
                `);
        } else {
          search.removeClass('noinvalid');
        }
        if (value.length === 0) {
          searchResult.html('');
        }
      },
      error: function (e, status) {
        console.log(e, status);
      },
      complete: function () {
        console.log('complete');
      },
    });
  });
  searchClose.on('click', function () {
    searchInput.val('');
    searchResult.html('');
    searchClose.removeClass('val');
  });
  $('.finance-link-popup').on('click', function () {
    ddrPopUp(
      {
        width: 360,
      },
      function (getDonate) {
        getDonate.wait();

        getSectionData({ section: 'support_project', template: 'render/donate.tpl', data: {} }, function (html, stat) {
          getDonate.setData(html, false, function () {
            getDonate.wait(false);
            let search = $('.search');
            let searchClose = $('.search-close');
            let searchInput = $('.search input');

            searchInput.on('input', function () {
              var value = $(this).val();
              const searchResult = $('.search-result');
              searchClose.toggleClass('val', value.length > 0);

              // if (value.length > 0 && r.data.length > 0) {
              //   search.addClass('invalid');
              // } else {
              //   search.removeClass('invalid');
              // }
              // if (r.data.length === 0) {
              //   search.addClass('noinvalid');
              // } else {
              //   search.removeClass('noinvalid');
              // }
              // if (value.length === 0) {
              //   searchResult.html('');
              // }
            });
            searchClose.on('click', function () {
              searchInput.val('');
              searchResult.html('');
              searchClose.removeClass('val');
            });
          });
        });
      }
    );
  });

  $('.drowdown-block__active').on('click', function () {
    $(this).toggleClass('active');
    $('.drowdown-block__list').toggleClass('active');
  });

  $(document).on('click', function (event) {
    var $clickedElement = $(event.target);

    var $dropdownList = $('.drowdown-block__list');
    var $dropdownActive = $('.drowdown-block__active');

    if (!$clickedElement.closest('.drowdown-block').length) {
      $dropdownList.removeClass('active');
      $dropdownActive.removeClass('active');
    }
  });

  $('.drowdown-block__active').on('click', function (event) {
    event.stopPropagation();
  });

  // получение аллергенов
  if (document.querySelector('.drowdown-block--pollens')) {
    console.log('tool')
    var riskLevel = {
      0: '<span  style="color:#8b8b8b">Нет пыльцы</span>',
      1: '<span style="color:#00b147">Мало пыльцы</span>',
      2: '<span style="color:#F5D033">Средне пыльцы</span>',
      3: '<span style="color:#F19F33">Много пыльцы</span>',
      4: '<span style="color:#FF4500">Оч. много пыльцы</span>',
      5: '<span style="color:#8E43C7">Экстра много пыльцы</span>',
    };
    var riskBcg = {
      0: '#8b8b8b',
      1: 'linear-gradient(90deg, #bdcb8e 0%, #70c270 100%)',
      2: '#f5c23d',
      3: 'linear-gradient(90deg, #f5c23d 0%, #f5693d 100%)',
      4: '#f5693d',
      5: '#7733ff',
    };

    function calculateIndex(data) {
      var stat = {};
      for (var i = 0; i < data.length; i++) {
        if (!stat[data[i].pollen_type]) stat[data[i].pollen_type] = { bad: 0, middle: 0, good: 0, ball: 0 };
        if (data[i].value == 1) stat[data[i].pollen_type].good++;
        if (data[i].value == 2) stat[data[i].pollen_type].middle++;
        if (data[i].value == 3) stat[data[i].pollen_type].bad++;
      }
      for (var i in stat) {
        var percents = ((stat[i].bad + stat[i].middle) / (stat[i].bad + stat[i].middle + stat[i].good)) * 100;
        if (percents <= 15) stat[i].ball = 0;
        else if (percents <= 30) stat[i].ball = 1;
        else if (percents <= 35) stat[i].ball = 2;
        else if (percents <= 40) stat[i].ball = 3;
        else if (percents <= 45) stat[i].ball = 4;
        else if (percents <= 50) stat[i].ball = 5;
        else if (percents <= 55) stat[i].ball = 6;
        else if (percents <= 60) stat[i].ball = 7;
        else if (percents <= 75) stat[i].ball = 8;
        else if (percents <= 85) stat[i].ball = 9;
        else stat[i].ball = 10;
      }
      return stat;
    }
    function pollenForType(id, hasData) {
      // if (id == -1) {
      //   $('#cbp-qtrotator').show();
      // } else {
      //   $('#cbp-qtrotator').hide();
      // }

      if (hasData) {
        let d = new Date();
        d.setTime(d.getTime() - 1000 * 60 * 60 * 6 * 16);
        let fromtime = parseInt(d.getHours() * 60 * 60 + d.getMinutes() * 60);
        let fromdate = '' + d.getFullYear() + '-' + (d.getMonth() > 8 ? '' : '0') + (d.getMonth() + 1) + '-' + (d.getDate() > 9 ? '' : '0') + d.getDate();
        console.log(id, fromtime, fromdate);
        $.ajax({
          type: 'GET',
          url: '/ajax/get_pollen_data',
          dataType: 'json',
          data: {
            url: 'https://test.pollen.club/maps/ddr_query.php',
            method: 'index1',
            params: {
              type: id,
              fromd: fromdate,
              fromt: fromtime,
            },
          },
          beforeSend: function () {},
          success: function (data) {
            // var export_pins = JSON.parse(r.data);
            console.log(data.data);
            // showGraph(data, id);
          },
          error: function (e, status) {
            console.log(e, status);
          },
          complete: function () {
            console.log('complete');
          },
        });
      } else {
        // $('#graph').hide();
      }

      // $('#graph2').hide();
    }
    let riskLevelNone = '<span style="color:#8b8b8b">Нет пыльцы</span>';
    let pinsNone = '<span style="color:#8b8b8b">Нет отметок</span>';
    let level_item__level = document.querySelector('.level-item__level');
    let level_item__level_text = level_item__level.querySelector('.level-item__content-text');
    let level_item__level_progress = level_item__level.querySelector('.level-item__content-progress');
    let level_item__index = document.querySelector('.level-item__index');
    let level_item__index_text = level_item__index.querySelector('.level-item__content-text');
    let level_item__index_progress = level_item__index.querySelector('.level-item__content-progress');

    let time_current = new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60;
    let statExport_pins;
    let ballov;
    let hasData;
    $.ajax({
      type: 'GET',
      url: '/ajax/get_pollen_data',
      dataType: 'json',
      data: {
        url: 'https://test.pollen.club/maps/ddr_query.php',
        method: 'export_pins',
        params: {
          time: time_current,
        },
      },
      beforeSend: function () {},
      success: function (r) {
        var export_pins = JSON.parse(r.data);
        statExport_pins = calculateIndex(export_pins);
      },
      error: function (e, status) {
        console.log(e, status);
      },
      complete: function () {
        console.log('complete');
      },
    });
    $.ajax({
      type: 'GET',
      url: '/ajax/get_pollen_data',
      dataType: 'json',
      data: {
        url: 'https://test.pollen.club/maps/ddr_query.php',
        method: 'risk',
        params: {
          type: 1,
        },
      },
      beforeSend: function () {},
      success: function (risk) {
        var riskData = JSON.parse(risk.data);
        var riskmap = [];
        var riskLevelArr = [];
        for (var j = 0; j < riskData.length; j++) {
          if (!riskmap[riskData[j].pollen_type]) riskmap[riskData[j].pollen_type] = riskLevel[riskData[j].level];
        }

        for (var j = 0; j < riskData.length; j++) {
          if (!riskLevelArr[riskData[j].pollen_type]) riskLevelArr[riskData[j].pollen_type] = riskBcg[riskData[j].level];
        }

        $.ajax({
          type: 'GET',
          url: '/ajax/get_pollen_data',
          dataType: 'json',
          data: {
            url: 'https://test.pollen.club/maps/ddr_query.php',
            method: 'pollen_type',
            params: {
              type: 1,
            },
          },
          beforeSend: function () {},
          success: function (r) {
            var dataPollens = JSON.parse(r.data);
            var firstItemDesc = '';
            var firstItemId = '';

            dataPollens.forEach(function (item, index) {
              var id = item.id;
              var desc = item.desc;
              var isActive = index === 0 ? 'active' : ''; // Check if it's the first item

              if (index === 0) {
                firstItemDesc = desc;
                firstItemId = id;
                // Уровень пыльцы
                if (riskmap[id]) {
                  level_item__level_text.innerHTML = riskmap[id];
                  level_item__level_progress.style.background = riskLevelArr[id];
                } else {
                  level_item__level_text.innerHTML = riskLevelNone;
                  level_item__level_progress.style.background = riskBcg[0];
                }

                //индекс самочуствия

                hasData = statExport_pins[item.id] && statExport_pins[item.id].bad + statExport_pins[item.id].good + statExport_pins[item.id].middle >= 20;
                ballov = statExport_pins[item.id] ? statExport_pins[item.id].ball : 0;
                pollenForType(item.id, hasData);

                console.log(123123123)

                if (hasData) {
                  if (ballov <= 1) {
                    level_item__index_text.innerHTML = pinsNone;
                    level_item__index_progress.style.background = '#8b8b8b';
                  } else if (ballov <= 4) {
                    level_item__index_text.innerHTML = `<span style="color:#00b147">${ballov} Балла</span>`;
                    level_item__index_progress.style.background = '#00b147';
                  } else if (ballov <= 7) {
                    level_item__index_text.innerHTML = `<span style="color:#F19F33">${ballov} Баллов</span>`;
                    level_item__index_progress.style.background = '#F19F33';
                  } else {
                    level_item__index_text.innerHTML = `<span style="color:#E9403F">${ballov} Баллов</span>`;
                    level_item__index_progress.style.background = '#E9403F';
                  }
                } else {
                  level_item__index_text.innerHTML = pinsNone;
                  level_item__index_progress.style.background = '#8b8b8b';
                }
              }
              $('.drowdown-block--pollens .drowdown-block__active').attr('data-id', firstItemId).html(`${firstItemDesc}`);
              $('.drowdown-block--pollens .drowdown-block__list').append(`<li data-id="${id}" class="${isActive}"><span>${desc}</span></li>`);
              getSectionData({ section: 'allergen', data: {} }, function (html, stat) {
                var matchedData = Object.values(html.allergen).find(function (item) {
                  return item.title === firstItemDesc;
                });
                if (matchedData) {
                  $('.pollen-level__left .photo img').attr('src', `/public/filemanager/${matchedData.img}`);
                  $('.pollen-level__left .photo .photo-text').text(matchedData.title);
                }
              });
            });
            $('.drowdown-block__list li').on('click', function () {
              var clickedTitle = $(this).text();
              var clickedId = $(this).attr('data-id');
              $('.drowdown-block__active').text(clickedTitle);
              $('.drowdown-block__active').addClass('active');
              $('.drowdown-block__list li').removeClass('active');
              $(this).addClass('active');
              $('.drowdown-block__list').removeClass('active');
              $('.drowdown-block__active').removeClass('active');
              // Загрузка фото аллергена после ajax и нажатия на пункт списка
              getSectionData({ section: 'allergen', data: {} }, function (html, stat) {
                var matchedData = Object.values(html.allergen).find(function (item) {
                  return item.title === clickedTitle;
                });
                if (matchedData) {
                  $('.pollen-level__left .photo img').attr('src', `public/filemanager/${matchedData.img}`);
                  $('.pollen-level__left .photo .photo-text').text(matchedData.title);
                }
              });
              // Уровень пыльцы

              if (riskmap[clickedId]) {
                level_item__level_text.innerHTML = riskmap[clickedId];
                level_item__level_progress.style.background = riskLevelArr[clickedId];
              } else {
                level_item__level_text.innerHTML = riskLevelNone;
                level_item__level_progress.style.background = riskBcg[0];
              }

              // индекс самочувствия
              hasData = statExport_pins[clickedId] && statExport_pins[clickedId].bad + statExport_pins[clickedId].good + statExport_pins[clickedId].middle >= 20;
              ballov = statExport_pins[clickedId] ? statExport_pins[clickedId].ball : 0;
              if (hasData) {
                if (ballov <= 1) {
                  level_item__index_text.innerHTML = pinsNone;
                  level_item__index_progress.style.background = '#8b8b8b';
                } else if (ballov <= 4) {
                  level_item__index_text.innerHTML = `<span style="color:#00b147">${ballov} Балла</span>`;
                  level_item__index_progress.style.background = '#00b147';
                } else if (ballov <= 7) {
                  level_item__index_text.innerHTML = `<span style="color:#F19F33">${ballov} Баллов</span>`;
                  level_item__index_progress.style.background = '#F19F33';
                } else {
                  level_item__index_text.innerHTML = `<span style="color:#E9403F">${ballov} Баллов</span>`;
                  level_item__index_progress.style.background = '#E9403F';
                }
              } else {
                level_item__index_text.innerHTML = pinsNone;
                level_item__index_progress.style.background = '#8b8b8b';
              }
            });
          },
          error: function (e, status) {
            console.log(e, status);
          },
          complete: function () {
            console.log('complete');
          },
        });
      },
      error: function (e, status) {
        console.log(e, status);
      },
      complete: function () {
        console.log('complete');
      },
    });
  }

  // Карта

  if ($('#silambtn').length) {
    $('#silam').css({
      opacity: '0',
      zIndex: '0',
    });

    $('#silambtn').on('click', function () {
      $('#map').css({
        opacity: '0',
        zIndex: '0',
      });
      $('#silam').css({
        opacity: '1',
        zIndex: '1',
      });
      $('.header__map').css('visibility', 'hidden');
      $('.content-main__map-text__link').text('Закрыть SILAM');
      $('.content-main__map-link').attr('href', '#');
    });

    $('.content-main__map-link').on('click', function (event) {
      if ($(this).attr('href') === '#') {
        event.preventDefault();
      }

      $('#map').css({
        opacity: '1',
        zIndex: '1',
      });
      $('#silam').css({
        opacity: '0',
        zIndex: '0',
      });
      $('.header__map').css('visibility', 'visible');
      $('.content-main__map-text__link').text('Закрыть Карту');
      $('.content-main__map-link').attr('href', '/');
    });
  }
  if ($('.gid_alergika')) {
    $.ajax({
      type: 'GET',
      url: '/ajax/get_all_hashtags',
      dataType: 'json',
      data: {},
      beforeSend: function () {},
      success: function (r) {
        $('.tags.tabs ul').append(`
            ${Object.keys(r.data)
              .map(
                key => `
                    <li>${key}</li>
                `
              )
              .join('')}
        `);
        $('.tags.tabs ul li').on('click', function () {
          var selectedTag = $(this).text().trim();
          $(this).addClass('active').siblings().removeClass('active');
          $('.card-allergika').each(function () {
            var postTags = $(this)
              .find('.card-allergika__tags li')
              .map(function () {
                return $(this).text().trim();
              })
              .get();
            if (postTags.includes(selectedTag) || postTags.includes('Реклама') || selectedTag === 'Все статьи') {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        });
      },
      error: function (e, status) {
        console.log(e, status);
      },
      complete: function () {
        console.log('complete');
      },
    });
  }

  const ctx = document.getElementById('myChart');
  if (ctx) {
    function ChartJS() {
      // макс высота графика
      let maxLabel = 12;
      if (window.matchMedia('(min-width: 768px)').matches) maxLabel = 16;

      const data = [
        { x: '01/04', y: 8 },
        { x: '01/05', y: 2 },
        { x: '01/07', y: 5 },
        { x: '01/08', y: 4 },
        { x: '01/10', y: 10 },
      ];

      const annotations = [];

      data.forEach((dataPoint, index) => {
        const annotation = {
          type: 'label',
          color: '#ffffff',
          content: ctx => {
            const currentValueForPoint = currentValueForIndex(ctx, index);
            return `${currentValueForPoint.toFixed(0)}`;
          },
          font: {
            size: 14,
            weight: 'bold',
          },
          padding: {},
          position: {
            x: 'center',
            y: 'end',
          },
          xValue: ctx => maxLabelForIndex(ctx, index),
          yAdjust: -6,
          yValue: ctx => currentValueForIndex(ctx, index),
        };
        const annotation_line = {
          type: 'line',
          borderColor: '#ffffff',
          borderDash: [3, 3],
          borderWidth: 1,
          xMax: index,
          xMin: index,
          xScaleID: 'x',
          yMax: 0,
          yMin: dataPoint.y,
          yScaleID: 'y',
        };
        annotations.push(annotation);
        annotations.push(annotation_line);
      });

      function currentValueForIndex(ctx, index) {
        const dataset = ctx.chart.data.datasets[0];
        const values = dataset.data.map(item => item.y);
        return values[index];
      }

      function maxLabelForIndex(ctx, index) {
        const dataset = ctx.chart.data.datasets[0];
        const labels = dataset.data.map(item => item.x);
        return labels[index];
      }
      let width, height, gradient;
      function getGradient(ctx, chartArea) {
        const chartWidth = chartArea.right - chartArea.left;
        const chartHeight = chartArea.bottom - chartArea.top;
        if (!gradient || width !== chartWidth || height !== chartHeight) {
          // Create the gradient because this is either the first render
          // or the size of the chart has changed
          width = chartWidth;
          height = chartHeight;
          gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, '#70C270');
          gradient.addColorStop(0.1, '#269ED9');
          gradient.addColorStop(0.25, '#F5C23D');
          gradient.addColorStop(0.5, '#F5C23D');
          gradient.addColorStop(0.75, '#F5693D');
        }

        return gradient;
      }
      new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [
            {
              data: data,
              borderWidth: 2,
              borderColor: function (context) {
                const chart = context.chart;
                const { ctx, chartArea } = chart;

                if (!chartArea) {
                  // This case happens on initial chart load
                  return;
                }
                return getGradient(ctx, chartArea);
              },
            },
          ],
        },
        spanGaps: true,
        options: {
          plugins: {
            legend: false,
            annotation: {
              clip: false,
              annotations: annotations,
            },
          },
          scales: {
            x: {
              display: true,

              ticks: {
                color: '#ffffff',
                font: {
                  size: 12,
                },
              },
            },
            y: {
              display: false,
              min: 0,
              max: maxLabel, // макс высота графика
              ticks: {
                stepSize: 1,
              },
            },
          },
          elements: {
            point: {
              pointStyle: false,
            },
          },
        },
      });
    }
    ChartJS();
  }
  const player = document.querySelector('.video-player__video');
  if (player) {
    const btnPlayPause = document.querySelector('.controls-buttons__play');
    const btnMute = document.querySelector('.controls-volume__mute');
    const progressBar = document.querySelector('.video-player__controls-progress');
    const volumeBar = document.querySelector('.controls-volume__range');

    // Update the video volume
    volumeBar.addEventListener('change', function (evt) {
      const { value, min, max } = evt.target;
      const percentage = ((value - min) * 100) / (max - min);
      volumeBar.style.setProperty('--percentage', `${100 - percentage}%`);
    });

    // Add a listener for the timeupdate event so we can update the progress bar
    player.addEventListener('timeupdate', updateProgressBar, false);

    // Add a listener for the play and pause events so the buttons state can be updated
    player.addEventListener(
      'play',
      function () {
        // Change the button to be a pause button
        changeButtonType(btnPlayPause, 'pause');
      },
      false
    );

    player.addEventListener(
      'pause',
      function () {
        // Change the button to be a play button
        changeButtonType(btnPlayPause, 'play');
      },
      false
    );
    btnPlayPause.addEventListener('click', playPauseVideo);

    btnMute.addEventListener('click', muteVolume);
    player.addEventListener(
      'volumechange',
      function (e) {
        // Update the button to be mute/unmute
        if (player.muted) changeButtonType(btnMute, 'unmute');
        else changeButtonType(btnMute, 'mute');
      },
      false
    );

    player.addEventListener(
      'ended',
      function () {
        this.pause();
      },
      false
    );

    progressBar.addEventListener('click', seek);

    function seek(e) {
      var percent = e.offsetX / this.offsetWidth;
      player.currentTime = percent * player.duration;
      e.target.value = Math.floor(percent / 100);
      e.target.innerHTML = progressBar.value + '% played';
    }

    function playPauseVideo() {
      if (player.paused || player.ended) {
        // Change the button to a pause button
        changeButtonType(btnPlayPause, 'pause');
        player.play();
      } else {
        // Change the button to a play button
        changeButtonType(btnPlayPause, 'play');
        player.pause();
      }
    }

    // Stop the current media from playing, and return it to the start position
    function stopVideo() {
      player.pause();
      if (player.currentTime) player.currentTime = 0;
    }

    // Toggles the media player's mute and unmute status
    function muteVolume() {
      if (player.muted) {
        // Change the button to a mute button
        changeButtonType(btnMute, 'mute');
        player.muted = false;
      } else {
        // Change the button to an unmute button
        changeButtonType(btnMute, 'unmute');
        player.muted = true;
      }
    }

    // Replays the media currently loaded in the player

    // Update the progress bar
    function updateProgressBar() {
      // Work out how much of the media has played via the duration and currentTime parameters
      var percentage = Math.floor((100 / player.duration) * player.currentTime);
      // Update the progress bar's value
      progressBar.value = percentage;
      // Update the progress bar's text (for browsers that don't support the progress element)
      progressBar.innerHTML = percentage + '% played';
    }

    // Updates a button's title, innerHTML and CSS class
    function changeButtonType(btn, value) {
      btn.title = value;
      if (value == 'mute') {
        btn.classList.remove('unmute');
        btn.classList.add('mute');
      }
      if (value == 'unmute') {
        btn.classList.remove('mute');
        btn.classList.add('unmute');
      }
      if (value == 'play') {
        btn.classList.remove('pause');
        btn.classList.add('play');
      }
      if (value == 'pause') {
        btn.classList.remove('play');
        btn.classList.add('pause');
      }
    }
  }
});
