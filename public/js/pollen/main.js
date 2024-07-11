var fenologyTitle = {
  1: 'Береза, стадия 1. Начало сокодвижения. 28-34 дня до цветения',
  2: 'Береза, стадия 2. Набухание почек, 28-34 дня до цветения',
  3: 'Береза, стадия 3. Распускание почек. 13-17 дней до цветения',
  4: 'Береза, стадия 4. Развертывание листьев. 1-5 дней до цветения',
  5: 'Береза, стадия 5. Начало цветения. 1-20 дней до окончания цветения',
  6: 'Береза, стадия 6. Завершение цветения',
};
var LevelTitle = {
  0: 'Нет пыльцы',
  1: 'Мало пыльцы',
  3: 'Средний уровень пыльцы',
  4: 'Много пыльцы',
  5: 'Очень много пыльцы',
  6: 'Экстра уровень пыльцы',
};
var riskLevel = {
  0: 'ltspan style=kvcolor:#8b8b8bkvrtнет пыльцыlt/spanrt',
  1: 'ltspan style=kvcolor:#00b147kvrtмало пыльцыlt/spanrt',
  2: 'ltspan style=kvcolor:#F5D033kvrtсредне пыльцыlt/spanrt',
  3: 'ltspan style=kvcolor:#F19F33kvrtмного пыльцыlt/spanrt',
  4: 'ltspan style=kvcolor:#FF4500Fkvrtоч. много пыльцыlt/spanrt',
  5: 'ltspan style=kvcolor:#8E43C7Fkvrtsэкстра много пыльцыlt/spanrt',
};
var week = [
  { id: 6, label: '05.02 - 11.02' },
  { id: 7, label: '12.02 - 18.02' },
  { id: 8, label: '19.02 - 25.02' },
  { id: 9, label: '26.02 - 04.03' },
  { id: 10, label: '05.03 - 11.03' },
  { id: 11, label: '12.03 - 18.03' },
  { id: 12, label: '19.03 - 25.03' },
  { id: 13, label: '26.03 - 01.04' },
  { id: 14, label: '02.04 - 08.04' },
  { id: 15, label: '09.04 - 15.04' },
  { id: 16, label: '16.04 - 22.04' },
  { id: 17, label: '23.04 - 29.04' },
  { id: 18, label: '30.04 - 06.05' },
  { id: 19, label: '07.05 - 13.05' },
  { id: 20, label: '14.05 - 20.05' },
  { id: 21, label: '21.05 - 27.05' },
  { id: 22, label: '28.05 - 03.06' },
  { id: 23, label: '04.06 - 10.06' },
  { id: 24, label: '11.06 - 17.06' },
  { id: 25, label: '18.06 - 24.06' },
  { id: 26, label: '25.06 - 01.07' },
  { id: 27, label: '02.07 - 08.07' },
  { id: 28, label: '09.07 - 15.07' },
  { id: 29, label: '16.07 - 22.07' },
  { id: 30, label: '23.07 - 29.07' },
  { id: 31, label: '30.07 - 05.08' },
  { id: 32, label: '06.08 - 12.08' },
  { id: 33, label: '13.08 - 19.08' },
  { id: 34, label: '20.08 - 26.08' },
  { id: 35, label: '27.08 - 02.09' },
  { id: 36, label: '03.09 - 09.09' },
  { id: 37, label: '10.09 - 16.09' },
  { id: 38, label: '17.09 - 23.09' },
  { id: 39, label: '24.09 - 30.09' },
];
var icons = [
  { url: 'public/images/pollen/maps/m1.png', name: 'm1' },
  { url: 'public/images/pollen/maps/m2.png', name: 'm2' },
  { url: 'public/images/pollen/maps/m3.png', name: 'm3' },
  { url: 'public/images/pollen/maps/m4.png', name: 'm4' },
  { url: 'public/images/pollen/maps/m5.png', name: 'm5' },
  { url: 'public/images/pollen/maps/m6.png', name: 'm6' },
  { url: 'public/images/pollen/maps/m7.png', name: 'm7' },
  { url: 'public/images/pollen/maps/m8.png', name: 'm8' },
  { url: 'public/images/pollen/maps/m9.png', name: 'm9' },
  { url: 'public/images/pollen/maps/m10.png', name: 'm10' },
  { url: 'public/images/pollen/maps/stage-icon2x.png', name: 'icon/stage-icon2x.png' },
  { url: 'public/images/pollen/maps/stage1-icon2x.png', name: 'icon/stage1-icon2x.png' },
  { url: 'public/images/pollen/maps/stage2-icon2x.png', name: 'icon/stage2-icon2x.png' },
  { url: 'public/images/pollen/maps/stage3-icon2x.png', name: 'icon/stage3-icon2x.png' },
  { url: 'public/images/pollen/maps/stage4-icon2x.png', name: 'icon/stage4-icon2x.png' },
  { url: 'public/images/pollen/maps/stage5-icon2x.png', name: 'icon/stage5-icon2x.png' },
  { url: 'public/images/pollen/maps/stage6-icon2x.png', name: 'icon/stage6-icon2x.png' },
];
var map;
var popup;
var markers;
var custMarkers = {};
var markersOnScreen = {};
var fenologyMarkers = [];
var marker = [];
var types;
var markerCluster;
var radiusData;
var FenologData;
var OtzyvData;
var showingRadiuses = [];
var time_current = new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60;

$(document).ready(function () {
  // $('.menum').click(function () {
  //   $('#left').toggle();
  //   $a = 'Архивы';
  //   document.getElementById('archive_btn').innerHTML = $a;
  //   $('.store').toggle();
  // });
  // $('#pollenbtn').click(function () {
  //   $a = 'Архивы';
  //   document.getElementById('archive_btn').innerHTML = $a;
  //   $('#archive_select').hide();
  //   $('#select').toggle();
  //   showIndex();
  //   $('.arh_block').hide();
  // });
  // initArchive();
  // $('#archive_btn').click(function () {
  //   // $('.news').click(function () {
  //   //   $('.archive_dropdown').css('background-color', '#fff');
  //   //   $('.otzyv').css('background-color', '#ffa161');
  //   //   $('.fenolog').css('background-color', '#fff');
  //   // });
  //   $('#select').hide();
  //   $('#archive_select').toggle();
  //   $('#archive_select').html($('#mainarchivemenu').html());
  //   var left = $('#archive_btn').position().left - $('#archive_btn').parent().parent().position().left;
  //   $('#archive_select').css('margin-left', Math.ceil(left));
  //   var top = $('#archive_btn').position().top + 64;
  //   $('#archive_select').css('top', Math.ceil(top));
  //   $('.cbp-qtrotator').hide();
  //   $('#left').hide();
  //   $('.store').hide();
  // });
  // $('.support').on('click', function () {
  //   //		$a = 'Архивы';
  //   //			document.getElementById('archive_btn').innerHTML = $a;
  //   window.open('/support-project/', '_blank', false);

  //   //            showOtzyv();
  //   $('#left').hide();
  //   $('.store').hide();
  // });
  // $('.fenolog').on('click', function () {
  //   showFenolog();
  //   $('#left').hide();
  //   $('.store').hide();
  //   $('.arh_block').hide();
  // });
  // $('.news').click(function () {
  //   $('.news').css('background-color', '#f0f0f0');
  //   $('#left').show();
  //   $('.store').show();
  //   $('.arh_block').hide();
  // });
  // $('.butref').on('click', function () {
  //   showRef();
  // });

  $('#preloader').css('display', 'block');

  initMap();

  Promise.all(
    icons.map(icon => {
      return new Promise((resolve, reject) => {
        map.loadImage(icon.url, (error, image) => {
          if (error) {
            debugger;
          }

          // console.log(`${icon} loaded`);
          map.addImage(icon.name, image);
          resolve();
        });
      });
    })
  ).then(values => {
    console.log('Map marker images loaded (all)');

    $.ajax({ url: 'https://test.pollen.club/maps/ddr_query.php?method=risk' }).done(function (risk) {
      var riskmap = [];
      for (var j = 0; j < risk.length; j++) {
        if (!riskmap[risk[j].pollen_type]) riskmap[risk[j].pollen_type] = riskLevel[risk[j].level];
      }

      $.ajax({ url: 'https://pollen.club/new_test_sql/?request=pollen_types' }).done(function (_types) {
        types = _types.result;

        $.ajax({ url: 'https://pollen.club/new_test_sql/?request=pins&time&time=' + time_current }).done(function (pollens) {
          var stat = calculateIndex(pollens.result);
          for (var i = 0; i < types.length; i++) {
            var style = '';
            var color = '#000000';
            if (stat[types[i].id] && stat[types[i].id].bad + stat[types[i].id].good + stat[types[i].id].middle >= 20)
              if (stat[types[i].id].ball <= 1) {
                style = "style='position: relative;background-color:#f0f0f0'";
              } else if (stat[types[i].id].ball <= 4) {
                style = "style='position: relative;background-color:#f0f0f0;'";
                color = '#00b147';
              } else if (stat[types[i].id].ball <= 7) {
                style = "style='position: relative;background-color:#f0f0f0;'";
                color = '#F19F33';
              } else {
                style = "style='position: relative;background-color:#f0f0f0;'";
                color = '#E9403F';
              }

            var hasData = stat[types[i].id] && stat[types[i].id].bad + stat[types[i].id].good + stat[types[i].id].middle >= 20;

            var text = types[i].desc + ' ' + (hasData ? 'ltsup class=kvupsmallkvrtltspan style=kvcolor:' + color + 'kvrt' + stat[types[i].id].ball + ' баллов(а)lt/spanrt,' : 'ltsup class=kvupsmallkvrt мало отметок,') + 'lt/suprt';
            var risk = riskmap[types[i].id] ? 'ltsup class=kvbuttomsmollkvrt' + riskmap[types[i].id] + 'lt/suprt' : '';
            console.log(risk);
            $('#select').append('<li><a ' + style + "onclick='pollenForType(" + types[i].id + ',"' + text + risk + '",' + hasData + ")'>" + (text + risk + '').replace(/lt/g, '<').replace(/rt/g, '>').replace(/kv/g, '"') + '</a></li>');
          }
          loadPoints(pollens.result);
          $('#preloader').css('display', 'none');
        });
        $.ajax({ url: 'https://test.pollen.club/maps/ddr_query.php?method=radius' }).done(function (data) {
          radiusData = data;
        });
        // $.ajax({ url: 'https://test.pollen.club/maps/doctor.php' }).done(function (data) {
        //   OtzyvData = data;
        // });

        $.ajax({ url: 'https://test.pollen.club/maps/ddr_query.php?method=fenology' }).done(function (data) {
          FenologData = data;
        });
      });
    });

    initQuoras();

    $('.dell a').click(function () {
      $('#left').hide();
      $('.store').hide();
    });
  });
});

function initArchive() {
  $('.archive_dropdown').click(function () {
    $('.archive_dropdown').css('background-color', '#f0f0f0');
    $('.otzyv').css('background-color', '#ffa161');
    $('.fenolog').css('background-color', '#fff');
    $('.news').css('background-color', '#fff');
    $('#pollenbtn').css('background-color', '#fff');
    $('.arh_block').show();
    $('#graph').hide();
    $('#graph2').hide();
  });

  function createSubmenu(id) {
    var row = "<div class='submenu' id='sub_" + id + "'>";
    for (var j = 0; j < week.length; j++) {
      row += "<li><a href='#'  onclick='showArchive(\"" + id + '","' + week[j].id + "\")' class='submenu_item'>" + week[j].label + '</a></li>';
    }
    row += '</div>';
    return row;
  }

  $.ajax({ url: 'https://test.pollen.club/maps/pollen_type.php' }).done(function (pollen_types) {
    var submenu = '';
    var mainmenu = '';
    for (var i = 0; i < pollen_types.length; i++) {
      mainmenu += '<li><a onclick=\'showArchiveSubmenu("' + pollen_types[i].id + "\")' class='submenu_item' href='#'>" + pollen_types[i].desc + '</a></li>';
      $('#archive_select').append(mainmenu);
      submenu += createSubmenu(pollen_types[i].id);
    }
    $('#archive_select')
      .parent()
      .append("<div style='display:none'><div id='mainarchivemenu'>" + mainmenu + '</div>' + submenu + '</div>');
  });
}

function showArchiveSubmenu(id) {
  $('#archive_select').html($('#sub_' + id).html());

  if (id == 1) {
    $a = 'Берёза';
  } else if (id == 2) {
    $a = 'Дуб';
  } else if (id == 3) {
    $a = 'Ольха';
  } else if (id == 4) {
    $a = 'Полынь';
  } else if (id == 5) {
    $a = 'Орешник';
  } else if (id == 6) {
    $a = 'Злаки';
  } else if (id == 7) {
    $a = 'Маревые';
  } else if (id == 8) {
    $a = 'Амброзия';
  } else if (id == 9) {
    $a = 'Клен';
  } else if (id == 13) {
    $a = 'Вяз';
  } else if (id == 14) {
    $a = 'Ясень';
  } else if (id == 15) {
    $a = 'Ива';
  } else if (id == 17) {
    $a = 'Олива';
  } else if (id == 18) {
    $a = 'Айлант';
  } else if (id == 19) {
    $a = 'Кипарис';
  } else if (id == 20) {
    $a = 'Платан';
  } else if (id == 21) {
    $a = 'Тис';
  } else if (id == 22) {
    $a = 'Эвкалипт';
  } else if (id == 23) {
    $a = 'Яснотковые';
  } else if (id == 24) {
    $a = 'Сосна';
  } else {
    $a = 'Архивы';
  }
  $('.dropdown-content li').click(function () {
    $('#left').show();
    $('.store').show();
  });
  document.getElementById('archive_btn').innerHTML = $a;
}

function showArchive(id, week) {
  $('#pollenbtn').html('Прогноз +5 дней');
  $('#graph').hide();
  $('#graph2').hide();
  $('.dropdown-content').hide();
  $('#cbp-qtrotator').hide();
  // for (var i = 0; i < markers.length; i++)
  //     markers[i].setMap(null);
  // for (var i = 0; i < marker.length; i++)
  //     marker[i].setMap(null);
  // markerCluster.clearMarkers();
  // markerCluster.redraw();
  // for (var i = 0; i < showingRadiuses.length; i++) {
  //     showingRadiuses[i].setMap(null)
  // }
  // showingRadiuses = [];

  $.ajax({ url: 'https://test.pollen.club/maps/archive.php?type=' + id + '&week=' + week }).done(function (data) {
    const circlesData = {
      type: 'FeatureCollection',
      features: data.map(item => {
        const circle = turf.circle([item.longitude, item.latitude], item.radius, { units: 'kilometers' });

        circle.properties.color = `#${item.color}`;
        circle.properties.radius = Number(item.radius);
        circle.properties.opacity = 0.7;

        return circle;
      }),
    };

    map.getSource('circles').setData(circlesData);
    addCirclesLayer();
    removeClusterData();
    removePollenDataLayer();
    removeFenologyLayer();

    // for (var i = 0; i < data.length; i++) {
    //     var city = data[i];

    //     var cityCircle = new google.maps.Circle({

    //         strokeColor: "#" + city.color,
    //         strokeOpacity: 0.1,
    //         strokeWeight: 1,
    //         fillColor: "#" + city.color,
    //         fillOpacity: 0.5,
    //         map: map,
    //         center: { lat: parseFloat(city.latitude), lng: parseFloat(city.longitude) },
    //         radius: parseFloat(city.radius) * 1000,
    //     });
    //     showingRadiuses.push(cityCircle);

    // }

    if (id == 1 && week == 6) {
      $a = 'Берёза, 05.02 - 11.02';
    } else if (id == 2 && week == 6) {
      $a = 'Дуб, 05.02 - 11.02';
    } else if (id == 3 && week == 6) {
      $a = 'Ольха, 05.02 - 11.02';
    } else if (id == 4 && week == 6) {
      $a = 'Полынь, 05.02 - 11.02';
    } else if (id == 5 && week == 6) {
      $a = 'Орешник, 05.02 - 11.02';
    } else if (id == 6 && week == 6) {
      $a = 'Злаки, 05.02 - 11.02';
    } else if (id == 7 && week == 6) {
      $a = 'Маревые, 05.02 - 11.02';
    } else if (id == 8 && week == 6) {
      $a = 'Амброзия, 05.02 - 11.02';
    } else if (id == 17 && week == 6) {
      $a = 'Олива, 05.02 - 11.02';
    } else if (id == 19 && week == 6) {
      $a = 'Кипарис, 05.02 - 11.02';
    } else if (id == 1 && week == 7) {
      $a = 'Берёза, 12.02 - 18.02';
    } else if (id == 2 && week == 7) {
      $a = 'Дуб, 12.02 - 18.02';
    } else if (id == 3 && week == 7) {
      $a = 'Ольха, 12.02 - 18.02';
    } else if (id == 4 && week == 7) {
      $a = 'Полынь, 12.02 - 18.02';
    } else if (id == 5 && week == 7) {
      $a = 'Орешник, 12.02 - 18.02';
    } else if (id == 6 && week == 7) {
      $a = 'Злаки, 12.02 - 18.02';
    } else if (id == 7 && week == 7) {
      $a = 'Маревые, 12.02 - 18.02';
    } else if (id == 8 && week == 7) {
      $a = 'Амброзия, 12.02 - 18.02';
    } else if (id == 17 && week == 7) {
      $a = 'Олива, 12.02 - 18.02';
    } else if (id == 19 && week == 7) {
      $a = 'Кипарис, 12.02 - 18.02';
    } else if (id == 1 && week == 8) {
      $a = 'Берёза, 19.02 - 25.02';
    } else if (id == 2 && week == 8) {
      $a = 'Дуб, 19.02 - 25.02';
    } else if (id == 3 && week == 8) {
      $a = 'Ольха, 19.02 - 25.02';
    } else if (id == 4 && week == 8) {
      $a = 'Полынь, 19.02 - 25.02';
    } else if (id == 5 && week == 8) {
      $a = 'Орешник, 19.02 - 25.02';
    } else if (id == 6 && week == 8) {
      $a = 'Злаки, 19.02 - 25.02';
    } else if (id == 7 && week == 8) {
      $a = 'Маревые, 19.02 - 25.02';
    } else if (id == 8 && week == 8) {
      $a = 'Амброзия, 19.02 - 25.02';
    } else if (id == 17 && week == 8) {
      $a = 'Олива, 19.02 - 25.02';
    } else if (id == 19 && week == 8) {
      $a = 'Кипарис, 19.02 - 25.02';
    } else if (id == 1 && week == 9) {
      $a = 'Берёза, 26.02 - 04.03';
    } else if (id == 2 && week == 9) {
      $a = 'Дуб, 26.02 - 04.03';
    } else if (id == 3 && week == 9) {
      $a = 'Ольха, 26.02 - 04.03';
    } else if (id == 4 && week == 9) {
      $a = 'Полынь, 26.02 - 04.03';
    } else if (id == 5 && week == 9) {
      $a = 'Орешник, 26.02 - 04.03';
    } else if (id == 6 && week == 9) {
      $a = 'Злаки, 26.02 - 04.03';
    } else if (id == 7 && week == 9) {
      $a = 'Маревые, 26.02 - 04.03';
    } else if (id == 8 && week == 9) {
      $a = 'Амброзия, 26.02 - 04.03';
    } else if (id == 17 && week == 9) {
      $a = 'Олива, 26.02 - 04.03';
    } else if (id == 19 && week == 9) {
      $a = 'Кипарис, 26.02 - 04.03';
    } else if (id == 1 && week == 10) {
      $a = 'Берёза, 05.03 - 11.03';
    } else if (id == 2 && week == 10) {
      $a = 'Дуб, 05.03 - 11.03';
    } else if (id == 3 && week == 10) {
      $a = 'Ольха, 05.03 - 11.03';
    } else if (id == 4 && week == 10) {
      $a = 'Полынь, 05.03 - 11.03';
    } else if (id == 5 && week == 10) {
      $a = 'Орешник, 05.03 - 11.03';
    } else if (id == 6 && week == 10) {
      $a = 'Злаки, 05.03 - 11.03';
    } else if (id == 7 && week == 10) {
      $a = 'Маревые, 05.03 - 11.03';
    } else if (id == 8 && week == 10) {
      $a = 'Амброзия, 05.03 - 11.03';
    } else if (id == 17 && week == 10) {
      $a = 'Олива, 05.03 - 11.03';
    } else if (id == 19 && week == 10) {
      $a = 'Кипарис, 05.03 - 11.03';
    } else if (id == 1 && week == 11) {
      $a = 'Берёза, 12.03 - 18.03';
    } else if (id == 2 && week == 11) {
      $a = 'Дуб, 12.03 - 18.03';
    } else if (id == 3 && week == 11) {
      $a = 'Ольха, 12.03 - 18.03';
    } else if (id == 4 && week == 11) {
      $a = 'Полынь, 12.03 - 18.03';
    } else if (id == 5 && week == 11) {
      $a = 'Орешник, 12.03 - 18.03';
    } else if (id == 6 && week == 11) {
      $a = 'Злаки, 12.03 - 18.03';
    } else if (id == 7 && week == 11) {
      $a = 'Маревые, 12.03 - 18.03';
    } else if (id == 8 && week == 11) {
      $a = 'Амброзия, 12.03 - 18.03';
    } else if (id == 17 && week == 11) {
      $a = 'Олива, 12.03 - 18.03';
    } else if (id == 19 && week == 11) {
      $a = 'Кипарис, 12.03 - 18.03';
    } else if (id == 1 && week == 12) {
      $a = 'Берёза, 19.03 - 25.03';
    } else if (id == 2 && week == 12) {
      $a = 'Дуб, 19.03 - 25.03';
    } else if (id == 3 && week == 12) {
      $a = 'Ольха, 19.03 - 25.03';
    } else if (id == 4 && week == 12) {
      $a = 'Полынь, 19.03 - 25.03';
    } else if (id == 5 && week == 12) {
      $a = 'Орешник, 19.03 - 25.03';
    } else if (id == 6 && week == 12) {
      $a = 'Злаки, 19.03 - 25.03';
    } else if (id == 7 && week == 12) {
      $a = 'Маревые, 19.03 - 25.03';
    } else if (id == 8 && week == 12) {
      $a = 'Амброзия, 19.03 - 25.03';
    } else if (id == 17 && week == 12) {
      $a = 'Олива, 19.03 - 25.03';
    } else if (id == 19 && week == 12) {
      $a = 'Кипарис, 19.03 - 25.03';
    } else if (id == 1 && week == 13) {
      $a = 'Берёза, 26.03 - 01.04';
    } else if (id == 2 && week == 13) {
      $a = 'Дуб, 26.03 - 01.04';
    } else if (id == 3 && week == 13) {
      $a = 'Ольха, 26.03 - 01.04';
    } else if (id == 4 && week == 13) {
      $a = 'Полынь, 26.03 - 01.04';
    } else if (id == 5 && week == 13) {
      $a = 'Орешник, 26.03 - 01.04';
    } else if (id == 6 && week == 13) {
      $a = 'Злаки, 26.03 - 01.04';
    } else if (id == 7 && week == 13) {
      $a = 'Маревые, 26.03 - 01.04';
    } else if (id == 8 && week == 13) {
      $a = 'Амброзия, 26.03 - 01.04';
    } else if (id == 17 && week == 13) {
      $a = 'Олива, 26.03 - 01.04';
    } else if (id == 19 && week == 13) {
      $a = 'Кипарис, 26.03 - 01.04';
    } else if (id == 1 && week == 14) {
      $a = 'Берёза, 02.04 - 08.04';
    } else if (id == 2 && week == 14) {
      $a = 'Дуб, 02.04 - 08.04';
    } else if (id == 3 && week == 14) {
      $a = 'Ольха, 02.04 - 08.04';
    } else if (id == 4 && week == 14) {
      $a = 'Полынь, 02.04 - 08.04';
    } else if (id == 5 && week == 14) {
      $a = 'Орешник, 02.04 - 08.04';
    } else if (id == 6 && week == 14) {
      $a = 'Злаки, 02.04 - 08.04';
    } else if (id == 7 && week == 14) {
      $a = 'Маревые, 02.04 - 08.04';
    } else if (id == 8 && week == 14) {
      $a = 'Амброзия, 02.04 - 08.04';
    } else if (id == 17 && week == 14) {
      $a = 'Олива, 02.04 - 08.04';
    } else if (id == 19 && week == 14) {
      $a = 'Кипарис, 02.04 - 08.04';
    } else if (id == 1 && week == 15) {
      $a = 'Берёза, 09.04 - 15.04';
    } else if (id == 2 && week == 15) {
      $a = 'Дуб, 09.04 - 15.04';
    } else if (id == 3 && week == 15) {
      $a = 'Ольха, 09.04 - 15.04';
    } else if (id == 4 && week == 15) {
      $a = 'Полынь, 09.04 - 15.04';
    } else if (id == 5 && week == 15) {
      $a = 'Орешник, 09.04 - 15.04';
    } else if (id == 6 && week == 15) {
      $a = 'Злаки, 09.04 - 15.04';
    } else if (id == 7 && week == 15) {
      $a = 'Маревые, 09.04 - 15.04';
    } else if (id == 8 && week == 15) {
      $a = 'Амброзия, 09.04 - 15.04';
    } else if (id == 17 && week == 15) {
      $a = 'Олива, 09.04 - 15.04';
    } else if (id == 19 && week == 15) {
      $a = 'Кипарис, 09.04 - 15.04';
    } else if (id == 1 && week == 16) {
      $a = 'Берёза, 16.04 - 22.04';
    } else if (id == 2 && week == 16) {
      $a = 'Дуб, 16.04 - 22.04';
    } else if (id == 3 && week == 16) {
      $a = 'Ольха, 16.04 - 22.04';
    } else if (id == 4 && week == 16) {
      $a = 'Полынь, 16.04 - 22.04';
    } else if (id == 5 && week == 16) {
      $a = 'Орешник, 16.04 - 22.04';
    } else if (id == 6 && week == 16) {
      $a = 'Злаки, 16.04 - 22.04';
    } else if (id == 7 && week == 16) {
      $a = 'Маревые, 16.04 - 22.04';
    } else if (id == 8 && week == 16) {
      $a = 'Амброзия, 16.04 - 22.04';
    } else if (id == 17 && week == 16) {
      $a = 'Олива, 16.04 - 22.04';
    } else if (id == 19 && week == 16) {
      $a = 'Кипарис, 16.04 - 22.04';
    } else if (id == 1 && week == 17) {
      $a = 'Берёза, 23.04 - 29.04';
    } else if (id == 2 && week == 17) {
      $a = 'Дуб, 23.04 - 29.04';
    } else if (id == 3 && week == 17) {
      $a = 'Ольха, 23.04 - 29.04';
    } else if (id == 4 && week == 17) {
      $a = 'Полынь, 23.04 - 29.04';
    } else if (id == 5 && week == 17) {
      $a = 'Орешник, 23.04 - 29.04';
    } else if (id == 6 && week == 17) {
      $a = 'Злаки, 23.04 - 29.04';
    } else if (id == 7 && week == 17) {
      $a = 'Маревые, 23.04 - 29.04';
    } else if (id == 8 && week == 17) {
      $a = 'Амброзия, 23.04 - 29.04';
    } else if (id == 17 && week == 17) {
      $a = 'Олива, 23.04 - 29.04';
    } else if (id == 19 && week == 17) {
      $a = 'Кипарис, 23.04 - 29.04';
    } else if (id == 1 && week == 18) {
      $a = 'Берёза, 30.04 - 06.05';
    } else if (id == 2 && week == 18) {
      $a = 'Дуб, 30.04 - 06.05';
    } else if (id == 3 && week == 18) {
      $a = 'Ольха, 30.04 - 06.05';
    } else if (id == 4 && week == 18) {
      $a = 'Полынь, 30.04 - 06.05';
    } else if (id == 5 && week == 18) {
      $a = 'Орешник, 30.04 - 06.05';
    } else if (id == 6 && week == 18) {
      $a = 'Злаки, 30.04 - 06.05';
    } else if (id == 7 && week == 18) {
      $a = 'Маревые, 30.04 - 06.05';
    } else if (id == 8 && week == 18) {
      $a = 'Амброзия, 30.04 - 06.05';
    } else if (id == 17 && week == 18) {
      $a = 'Олива, 30.04 - 06.05';
    } else if (id == 19 && week == 18) {
      $a = 'Кипарис, 30.04 - 06.05';
    } else if (id == 1 && week == 19) {
      $a = 'Берёза, 07.05 - 13.05';
    } else if (id == 2 && week == 19) {
      $a = 'Дуб, 07.05 - 13.05';
    } else if (id == 3 && week == 19) {
      $a = 'Ольха, 07.05 - 13.05';
    } else if (id == 4 && week == 19) {
      $a = 'Полынь, 07.05 - 13.05';
    } else if (id == 5 && week == 19) {
      $a = 'Орешник, 07.05 - 13.05';
    } else if (id == 6 && week == 19) {
      $a = 'Злаки, 07.05 - 13.05';
    } else if (id == 7 && week == 19) {
      $a = 'Маревые, 07.05 - 13.05';
    } else if (id == 8 && week == 19) {
      $a = 'Амброзия, 07.05 - 13.05';
    } else if (id == 17 && week == 19) {
      $a = 'Олива, 07.05 - 13.05';
    } else if (id == 19 && week == 19) {
      $a = 'Кипарис, 07.05 - 13.05';
    } else if (id == 1 && week == 20) {
      $a = 'Берёза, 14.05 - 20.05';
    } else if (id == 2 && week == 20) {
      $a = 'Дуб, 14.05 - 20.05';
    } else if (id == 3 && week == 20) {
      $a = 'Ольха, 14.05 - 20.05';
    } else if (id == 4 && week == 20) {
      $a = 'Полынь, 14.05 - 20.05';
    } else if (id == 5 && week == 20) {
      $a = 'Орешник, 14.05 - 20.05';
    } else if (id == 6 && week == 20) {
      $a = 'Злаки, 14.05 - 20.05';
    } else if (id == 7 && week == 20) {
      $a = 'Маревые, 14.05 - 20.05';
    } else if (id == 8 && week == 20) {
      $a = 'Амброзия, 14.05 - 20.05';
    } else if (id == 17 && week == 20) {
      $a = 'Олива, 14.05 - 20.05';
    } else if (id == 19 && week == 20) {
      $a = 'Кипарис, 14.05 - 20.05';
    } else if (id == 1 && week == 21) {
      $a = 'Берёза, 21.05 - 27.05';
    } else if (id == 2 && week == 21) {
      $a = 'Дуб, 21.05 - 27.05';
    } else if (id == 3 && week == 21) {
      $a = 'Ольха, 21.05 - 27.05';
    } else if (id == 4 && week == 21) {
      $a = 'Полынь, 21.05 - 27.05';
    } else if (id == 5 && week == 21) {
      $a = 'Орешник, 21.05 - 27.05';
    } else if (id == 6 && week == 21) {
      $a = 'Злаки, 21.05 - 27.05';
    } else if (id == 7 && week == 21) {
      $a = 'Маревые, 21.05 - 27.05';
    } else if (id == 8 && week == 21) {
      $a = 'Амброзия, 21.05 - 27.05';
    } else if (id == 17 && week == 21) {
      $a = 'Олива, 21.05 - 27.05';
    } else if (id == 19 && week == 21) {
      $a = 'Кипарис, 21.05 - 27.05';
    } else if (id == 1 && week == 22) {
      $a = 'Берёза, 28.05 - 03.06';
    } else if (id == 2 && week == 22) {
      $a = 'Дуб, 28.05 - 03.06';
    } else if (id == 3 && week == 22) {
      $a = 'Ольха, 28.05 - 03.06';
    } else if (id == 4 && week == 22) {
      $a = 'Полынь, 28.05 - 03.06';
    } else if (id == 5 && week == 22) {
      $a = 'Орешник, 28.05 - 03.06';
    } else if (id == 6 && week == 22) {
      $a = 'Злаки, 28.05 - 03.06';
    } else if (id == 7 && week == 22) {
      $a = 'Маревые, 28.05 - 03.06';
    } else if (id == 8 && week == 22) {
      $a = 'Амброзия, 28.05 - 03.06';
    } else if (id == 17 && week == 22) {
      $a = 'Олива, 28.05 - 03.06';
    } else if (id == 19 && week == 22) {
      $a = 'Кипарис, 28.05 - 03.06';
    } else if (id == 1 && week == 23) {
      $a = 'Берёза, 04.06 - 10.06';
    } else if (id == 2 && week == 23) {
      $a = 'Дуб, 04.06 - 10.06';
    } else if (id == 3 && week == 23) {
      $a = 'Ольха, 04.06 - 10.06';
    } else if (id == 4 && week == 23) {
      $a = 'Полынь, 04.06 - 10.06';
    } else if (id == 5 && week == 23) {
      $a = 'Орешник, 04.06 - 10.06';
    } else if (id == 6 && week == 23) {
      $a = 'Злаки, 04.06 - 10.06';
    } else if (id == 7 && week == 23) {
      $a = 'Маревые, 04.06 - 10.06';
    } else if (id == 8 && week == 23) {
      $a = 'Амброзия, 04.06 - 10.06';
    } else if (id == 17 && week == 23) {
      $a = 'Олива, 04.06 - 10.06';
    } else if (id == 19 && week == 23) {
      $a = 'Кипарис, 04.06 - 10.06';
    } else if (id == 1 && week == 24) {
      $a = 'Берёза, 11.06 - 17.06';
    } else if (id == 2 && week == 24) {
      $a = 'Дуб, 11.06 - 17.06';
    } else if (id == 3 && week == 24) {
      $a = 'Ольха, 11.06 - 17.06';
    } else if (id == 4 && week == 24) {
      $a = 'Полынь, 11.06 - 17.06';
    } else if (id == 5 && week == 24) {
      $a = 'Орешник, 11.06 - 17.06';
    } else if (id == 6 && week == 24) {
      $a = 'Злаки, 11.06 - 17.06';
    } else if (id == 7 && week == 24) {
      $a = 'Маревые, 11.06 - 17.06';
    } else if (id == 8 && week == 24) {
      $a = 'Амброзия, 11.06 - 17.06';
    } else if (id == 17 && week == 24) {
      $a = 'Олива, 11.06 - 17.06';
    } else if (id == 19 && week == 24) {
      $a = 'Кипарис, 11.06 - 17.06';
    } else if (id == 1 && week == 25) {
      $a = 'Берёза, 18.06 - 24.06';
    } else if (id == 2 && week == 25) {
      $a = 'Дуб, 18.06 - 24.06';
    } else if (id == 3 && week == 25) {
      $a = 'Ольха, 18.06 - 24.06';
    } else if (id == 4 && week == 25) {
      $a = 'Полынь, 18.06 - 24.06';
    } else if (id == 5 && week == 25) {
      $a = 'Орешник, 18.06 - 24.06';
    } else if (id == 6 && week == 25) {
      $a = 'Злаки, 18.06 - 24.06';
    } else if (id == 7 && week == 25) {
      $a = 'Маревые, 18.06 - 24.06';
    } else if (id == 8 && week == 25) {
      $a = 'Амброзия, 18.06 - 24.06';
    } else if (id == 17 && week == 25) {
      $a = 'Олива, 18.06 - 24.06';
    } else if (id == 19 && week == 25) {
      $a = 'Кипарис, 18.06 - 24.06';
    } else if (id == 1 && week == 26) {
      $a = 'Берёза, 25.06 - 01.07';
    } else if (id == 2 && week == 26) {
      $a = 'Дуб, 25.06 - 01.07';
    } else if (id == 3 && week == 26) {
      $a = 'Ольха, 25.06 - 01.07';
    } else if (id == 4 && week == 26) {
      $a = 'Полынь, 25.06 - 01.07';
    } else if (id == 5 && week == 26) {
      $a = 'Орешник, 25.06 - 01.07';
    } else if (id == 6 && week == 26) {
      $a = 'Злаки, 25.06 - 01.07';
    } else if (id == 7 && week == 26) {
      $a = 'Маревые, 25.06 - 01.07';
    } else if (id == 8 && week == 26) {
      $a = 'Амброзия, 25.06 - 01.07';
    } else if (id == 17 && week == 26) {
      $a = 'Олива, 25.06 - 01.07';
    } else if (id == 19 && week == 26) {
      $a = 'Кипарис, 25.06 - 01.07';
    } else if (id == 1 && week == 27) {
      $a = 'Берёза, 02.07 - 08.07';
    } else if (id == 2 && week == 27) {
      $a = 'Дуб, 02.07 - 08.07';
    } else if (id == 3 && week == 27) {
      $a = 'Ольха, 02.07 - 08.07';
    } else if (id == 4 && week == 27) {
      $a = 'Полынь, 02.07 - 08.07';
    } else if (id == 5 && week == 27) {
      $a = 'Орешник, 02.07 - 08.07';
    } else if (id == 6 && week == 27) {
      $a = 'Злаки, 02.07 - 08.07';
    } else if (id == 7 && week == 27) {
      $a = 'Маревые, 02.07 - 08.07';
    } else if (id == 8 && week == 27) {
      $a = 'Амброзия, 02.07 - 08.07';
    } else if (id == 17 && week == 27) {
      $a = 'Олива, 02.07 - 08.07';
    } else if (id == 19 && week == 27) {
      $a = 'Кипарис, 02.07 - 08.07';
    } else if (id == 1 && week == 28) {
      $a = 'Берёза, 09.07 - 15.07';
    } else if (id == 2 && week == 28) {
      $a = 'Дуб, 09.07 - 15.07';
    } else if (id == 3 && week == 28) {
      $a = 'Ольха, 09.07 - 15.07';
    } else if (id == 4 && week == 28) {
      $a = 'Полынь, 09.07 - 15.07';
    } else if (id == 5 && week == 28) {
      $a = 'Орешник, 09.07 - 15.07';
    } else if (id == 6 && week == 28) {
      $a = 'Злаки, 09.07 - 15.07';
    } else if (id == 7 && week == 28) {
      $a = 'Маревые, 09.07 - 15.07';
    } else if (id == 8 && week == 28) {
      $a = 'Амброзия, 09.07 - 15.07';
    } else if (id == 17 && week == 28) {
      $a = 'Олива, 09.07 - 15.07';
    } else if (id == 19 && week == 28) {
      $a = 'Кипарис, 09.07 - 15.07';
    } else if (id == 1 && week == 29) {
      $a = 'Берёза, 16.07 - 22.07';
    } else if (id == 2 && week == 29) {
      $a = 'Дуб, 16.07 - 22.07';
    } else if (id == 3 && week == 29) {
      $a = 'Ольха, 16.07 - 22.07';
    } else if (id == 4 && week == 29) {
      $a = 'Полынь, 16.07 - 22.07';
    } else if (id == 5 && week == 29) {
      $a = 'Орешник, 16.07 - 22.07';
    } else if (id == 6 && week == 29) {
      $a = 'Злаки, 16.07 - 22.07';
    } else if (id == 7 && week == 29) {
      $a = 'Маревые, 16.07 - 22.07';
    } else if (id == 8 && week == 29) {
      $a = 'Амброзия, 16.07 - 22.07';
    } else if (id == 17 && week == 29) {
      $a = 'Олива,  16.07 - 22.07';
    } else if (id == 19 && week == 29) {
      $a = 'Кипарис,  16.07 - 22.07';
    } else if (id == 1 && week == 30) {
      $a = 'Берёза, 23.07 - 29.07';
    } else if (id == 2 && week == 30) {
      $a = 'Дуб, 23.07 - 29.07';
    } else if (id == 3 && week == 30) {
      $a = 'Ольха, 23.07 - 29.07';
    } else if (id == 4 && week == 30) {
      $a = 'Полынь, 23.07 - 29.07';
    } else if (id == 5 && week == 30) {
      $a = 'Орешник, 23.07 - 29.07';
    } else if (id == 6 && week == 30) {
      $a = 'Злаки, 23.07 - 29.07';
    } else if (id == 7 && week == 30) {
      $a = 'Маревые, 23.07 - 29.07';
    } else if (id == 8 && week == 30) {
      $a = 'Амброзия, 23.07 - 29.07';
    } else if (id == 17 && week == 30) {
      $a = 'Олива, 23.07 - 29.07';
    } else if (id == 19 && week == 30) {
      $a = 'Кипарис, 23.07 - 29.07';
    } else if (id == 1 && week == 31) {
      $a = 'Берёза, 30.07 - 05.08';
    } else if (id == 2 && week == 31) {
      $a = 'Дуб, 30.07 - 05.08';
    } else if (id == 3 && week == 31) {
      $a = 'Ольха, 30.07 - 05.08';
    } else if (id == 4 && week == 31) {
      $a = 'Полынь, 30.07 - 05.08';
    } else if (id == 5 && week == 31) {
      $a = 'Орешник, 30.07 - 05.08';
    } else if (id == 6 && week == 31) {
      $a = 'Злаки, 30.07 - 05.08';
    } else if (id == 7 && week == 31) {
      $a = 'Маревые, 30.07 - 05.08';
    } else if (id == 8 && week == 31) {
      $a = 'Амброзия, 30.07 - 05.08';
    } else if (id == 17 && week == 31) {
      $a = 'Олива, 30.07 - 05.08';
    } else if (id == 19 && week == 31) {
      $a = 'Кипарис, 30.07 - 05.08';
    } else if (id == 1 && week == 32) {
      $a = 'Берёза, 06.08 - 12.08';
    } else if (id == 2 && week == 32) {
      $a = 'Дуб, 06.08 - 12.08';
    } else if (id == 3 && week == 32) {
      $a = 'Ольха, 06.08 - 12.08';
    } else if (id == 4 && week == 32) {
      $a = 'Полынь, 06.08 - 12.08';
    } else if (id == 5 && week == 32) {
      $a = 'Орешник, 06.08 - 12.08';
    } else if (id == 6 && week == 32) {
      $a = 'Злаки, 06.08 - 12.08';
    } else if (id == 7 && week == 32) {
      $a = 'Маревые, 06.08 - 12.08';
    } else if (id == 8 && week == 32) {
      $a = 'Амброзия, 06.08 - 12.08';
    } else if (id == 17 && week == 32) {
      $a = 'Олива, 06.08 - 12.08';
    } else if (id == 19 && week == 32) {
      $a = 'Кипарис, 06.08 - 12.08';
    } else if (id == 1 && week == 33) {
      $a = 'Берёза, 13.08 - 19.08';
    } else if (id == 2 && week == 33) {
      $a = 'Дуб, 13.08 - 19.08';
    } else if (id == 3 && week == 33) {
      $a = 'Ольха, 13.08 - 19.08';
    } else if (id == 4 && week == 33) {
      $a = 'Полынь, 13.08 - 19.08';
    } else if (id == 5 && week == 33) {
      $a = 'Орешник, 13.08 - 19.08';
    } else if (id == 6 && week == 33) {
      $a = 'Злаки, 13.08 - 19.08';
    } else if (id == 7 && week == 33) {
      $a = 'Маревые, 13.08 - 19.08';
    } else if (id == 8 && week == 33) {
      $a = 'Амброзия, 13.08 - 19.08';
    } else if (id == 17 && week == 33) {
      $a = 'Олива, 13.08 - 19.08';
    } else if (id == 19 && week == 33) {
      $a = 'Кипарис, 13.08 - 19.08';
    } else if (id == 1 && week == 34) {
      $a = 'Берёза, 20.08 - 26.08';
    } else if (id == 2 && week == 34) {
      $a = 'Дуб, 20.08 - 26.08';
    } else if (id == 3 && week == 34) {
      $a = 'Ольха, 20.08 - 26.08';
    } else if (id == 4 && week == 34) {
      $a = 'Полынь, 20.08 - 26.08';
    } else if (id == 5 && week == 34) {
      $a = 'Орешник, 20.08 - 26.08';
    } else if (id == 6 && week == 34) {
      $a = 'Злаки, 20.08 - 26.08';
    } else if (id == 7 && week == 34) {
      $a = 'Маревые, 20.08 - 26.08';
    } else if (id == 8 && week == 34) {
      $a = 'Амброзия, 20.08 - 26.08';
    } else if (id == 17 && week == 34) {
      $a = 'Олива, 20.08 - 26.08';
    } else if (id == 19 && week == 34) {
      $a = 'Кипарис, 20.08 - 26.08';
    } else if (id == 1 && week == 35) {
      $a = 'Берёза, 27.08 - 02.09';
    } else if (id == 2 && week == 35) {
      $a = 'Дуб, 27.08 - 02.09';
    } else if (id == 3 && week == 35) {
      $a = 'Ольха, 27.08 - 02.09';
    } else if (id == 4 && week == 35) {
      $a = 'Полынь, 27.08 - 02.09';
    } else if (id == 5 && week == 35) {
      $a = 'Орешник, 27.08 - 02.09';
    } else if (id == 6 && week == 35) {
      $a = 'Злаки, 27.08 - 02.09';
    } else if (id == 7 && week == 35) {
      $a = 'Маревые, 27.08 - 02.09';
    } else if (id == 8 && week == 35) {
      $a = 'Амброзия, 27.08 - 02.09';
    } else if (id == 17 && week == 35) {
      $a = 'Олива, 27.08 - 02.09';
    } else if (id == 19 && week == 35) {
      $a = 'Кипарис, 27.08 - 02.09';
    } else if (id == 1 && week == 36) {
      $a = 'Берёза, 03.09 - 09.09';
    } else if (id == 2 && week == 36) {
      $a = 'Дуб, 03.09 - 09.09';
    } else if (id == 3 && week == 36) {
      $a = 'Ольха, 03.09 - 09.09';
    } else if (id == 4 && week == 36) {
      $a = 'Полынь, 03.09 - 09.09';
    } else if (id == 5 && week == 36) {
      $a = 'Орешник, 03.09 - 09.09';
    } else if (id == 6 && week == 36) {
      $a = 'Злаки, 03.09 - 09.09';
    } else if (id == 7 && week == 36) {
      $a = 'Маревые, 03.09 - 09.09';
    } else if (id == 8 && week == 36) {
      $a = 'Амброзия, 03.09 - 09.09';
    } else if (id == 17 && week == 36) {
      $a = 'Олива, 03.09 - 09.09';
    } else if (id == 19 && week == 36) {
      $a = 'Кипарис, 03.09 - 09.09';
    } else if (id == 1 && week == 37) {
      $a = 'Берёза, 10.09 - 16.09';
    } else if (id == 2 && week == 37) {
      $a = 'Дуб, 10.09 - 16.09';
    } else if (id == 3 && week == 37) {
      $a = 'Ольха, 10.09 - 16.09';
    } else if (id == 4 && week == 37) {
      $a = 'Полынь, 10.09 - 16.09';
    } else if (id == 5 && week == 37) {
      $a = 'Орешник, 10.09 - 16.09';
    } else if (id == 6 && week == 37) {
      $a = 'Злаки, 10.09 - 16.09';
    } else if (id == 7 && week == 37) {
      $a = 'Маревые, 10.09 - 16.09';
    } else if (id == 8 && week == 37) {
      $a = 'Амброзия, 10.09 - 16.09';
    } else if (id == 17 && week == 37) {
      $a = 'Олива, 10.09 - 16.09';
    } else if (id == 19 && week == 37) {
      $a = 'Кипарис, 10.09 - 16.09';
    } else if (id == 1 && week == 38) {
      $a = 'Берёза, 17.09 - 23.09';
    } else if (id == 2 && week == 38) {
      $a = 'Дуб, 17.09 - 23.09';
    } else if (id == 3 && week == 38) {
      $a = 'Ольха, 17.09 - 23.09';
    } else if (id == 4 && week == 38) {
      $a = 'Полынь, 17.09 - 23.09';
    } else if (id == 5 && week == 38) {
      $a = 'Орешник, 17.09 - 23.09';
    } else if (id == 6 && week == 38) {
      $a = 'Злаки, 17.09 - 23.09';
    } else if (id == 7 && week == 38) {
      $a = 'Маревые, 17.09 - 23.09';
    } else if (id == 8 && week == 38) {
      $a = 'Амброзия, 17.09 - 23.09';
    } else if (id == 17 && week == 38) {
      $a = 'Олива, 17.09 - 23.09';
    } else if (id == 19 && week == 38) {
      $a = 'Кипарис, 17.09 - 23.09';
    } else if (id == 1 && week == 39) {
      $a = 'Берёза, 24.09 - 30.09';
    } else if (id == 2 && week == 39) {
      $a = 'Дуб, 24.09 - 30.09';
    } else if (id == 3 && week == 39) {
      $a = 'Ольха, 24.09 - 30.09';
    } else if (id == 4 && week == 39) {
      $a = 'Полынь, 24.09 - 30.09';
    } else if (id == 5 && week == 39) {
      $a = 'Орешник, 24.09 - 30.09';
    } else if (id == 6 && week == 39) {
      $a = 'Злаки, 24.09 - 30.09';
    } else if (id == 7 && week == 39) {
      $a = 'Маревые, 24.09 - 30.09';
    } else if (id == 8 && week == 39) {
      $a = 'Амброзия, 24.09 - 30.09';
    } else if (id == 17 && week == 39) {
      $a = 'Олива, 24.09 - 30.09';
    } else if (id == 19 && week == 39) {
      $a = 'Кипарис, 24.09 - 30.09';
    } else {
      $a = 'Архивы';
    }

    document.getElementById('archive_btn').innerHTML = $a;
  });
}

function showOtzyv() {
  $a = 'Архивы';
  document.getElementById('archive_btn').innerHTML = $a;
  $('.news').click(function () {
    $('.archive_dropdown').css('background-color', '#fff');
    $('.otzyv').css('background-color', '#fff');
    $('.fenolog').css('background-color', '#fff');
  });
  $('.archive_dropdown').css('background-color', '#fff');
  $('.news').css('background-color', '#fff');
  $('#graph').hide();
  $('#graph2').hide();
  $('#cbp-qtrotator').show();
  $('.dropdown-content').hide();
  for (var i = 0; i < markers.length; i++) markers[i].setMap(null);
  markerCluster.clearMarkers();
  markerCluster.redraw();
  $('.otzyv').css('background-color', '#f0f0f0');
  $('.fenolog').css('background-color', '#f0f0f0');
  $('#pollenbtn').css('background-color', '#fff');
  for (var i = 0; i < showingRadiuses.length; i++) {
    showingRadiuses[i].setMap(null);
  }
  showingRadiuses = [];
  showOtzyvMarkers();
}

function showFenolog() {
  $('.news').click(function () {
    $('.archive_dropdown').css('background-color', '#fff');
    $('.otzyv').css('background-color', '#ffa161');
    $('.fenolog').css('background-color', '#fff');
  });
  $('.archive_dropdown').css('background-color', '#fff');
  $('.news').css('background-color', '#fff');
  $('#graph').hide();
  $('#graph2').hide();
  $('#cbp-qtrotator').show();
  $('.dropdown-content').hide();
  $('.otzyv').css('background-color', '#ffa161');
  $('.fenolog').css('background-color', '#f0f0f0');
  $('#pollenbtn').css('background-color', '#fff');
  showFenologMarkers();
}

function showIndex() {
  $a = 'Архивы';
  document.getElementById('archive_btn').innerHTML = $a;
  $('.archive_dropdown').css('background-color', '#fff');
  $('.news').css('background-color', '#f0f0f0');
  $('#pollenbtn').css('background-color', '#f0f0f0');
  $('.otzyv').css('background-color', '#ffa161');
  $('.fenolog').css('background-color', '#fff');
  $('.news').css('background-color', '#fff');
  if (jQuery('.dropdown-content').css('display') == 'block') {
    $('#pollenbtn').html('Выберите аллерген</sup><span class="uparrow"></span>');
  } else {
    $('#pollenbtn').html('Выберите аллерген</sup><span class="downarrow">');
  }
}

function initMap() {
  map = new maplibregl.Map({
    container: 'map',
    // style: 'https://api.maptiler.com/maps/openstreetmap/style.json?key=8r5ygSAEe7IGx7IGTiUa',
    style: {
      version: 8,
      sources: {
        'raster-tiles': {
          type: 'raster',
          tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '<a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors',
        },
      },
      layers: [
        {
          id: 'simple-tiles',
          type: 'raster',
          source: 'raster-tiles',
          minzoom: 0,
          maxzoom: 22,
        },
      ],
      glyphs: 'https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=8r5ygSAEe7IGx7IGTiUa',
    },
    center: [37.6173, 55.755826],
    zoom: 4,
  });

  map.on('load', () => {
    // Create a popup, but don't add it to the map yet.
    popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
    });
    map.on('mouseenter', 'fenology_data', e => {
      map.getCanvas().style.cursor = 'pointer';
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on('mouseleave', 'fenology_data', () => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });

    map.addSource('circles', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: [] },
    });
  });
}

function pollenForType(id, text, hasData) {
  if (id == -1) {
    $('#cbp-qtrotator').show();
  } else {
    $('#cbp-qtrotator').hide();
  }

  $('#pollenbtn').html(text.replace(/lt/g, '<span class="downarrow"></span><').replace(/rt/g, '>').replace(/kv/g, '"'));

  var time = new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60;
  var theUrl = id && id > -1 ? 'https://pollen.club/test_sql/?request=typed_pins&type=' + id + '&time=' + time : 'https://pollen.club/new_test_sql/?         request=pins&time=' + time;

  // removeCirclesLayer();
  removePollenDataLayer();
  removeClusterData();
  removeFenologyLayer();

  $.ajax({ url: theUrl }).done(function (data) {
    loadPoints(data.result);
  });
  $('.dropdown-content').hide();

  //circles
  const circlesData = {
    type: 'FeatureCollection',
    features: radiusData
      .filter(item => item.pollen_type == id)
      .map(item => {
        const circle = turf.circle([item.longitude, item.latitude], item.radius, { units: 'kilometers' });

        circle.properties.color = `#${item.color}`;
        circle.properties.radius = Number(item.radius);
        circle.properties.opacity = 0.5;

        return circle;
      }),
  };

  map.getSource('circles').setData(circlesData);

  addCirclesLayer();
  addPollenDataLayer();

  var d = new Date();
  d.setTime(d.getTime() - 1000 * 60 * 60 * 6 * 16);
  var fromtime = parseInt(d.getHours() * 60 * 60 + d.getMinutes() * 60);
  var fromdate = '' + d.getFullYear() + '-' + (d.getMonth() > 8 ? '' : '0') + (d.getMonth() + 1) + '-' + (d.getDate() > 9 ? '' : '0') + d.getDate();
  if (hasData)
    $.ajax({ url: 'https://test.pollen.club/maps/index.php?type=' + id + '&fromd=' + fromdate + '&fromt=' + fromtime }).done(function (data) {
      $('#graph').show();
      showGraph(data, id);
    });
  else {
    $('#graph').hide();
  }

  $('#graph2').hide();
  if (id > -1)
    $.ajax({ url: 'https://test.pollen.club/maps/forecast.php?type=' + id }).done(function (data) {
      if (data.length > 0) {
        $('#graph2').show();
        showGraph2(data, id);
      }
    });
}

function typeToColor(type) {
  let result = '#41E696';

  switch (type) {
    case 2:
      result = '#BDE640';
      break;
    case 3:
      result = '#BDE640';
      break;
    case 4:
      result = '#FFC600';
      break;
    case 5:
      result = '#F29F10';
      break;
    case 6:
      result = '#F77F1B';
      break;
    case 7:
      result = '#FC6520';
      break;
    case 8:
      result = '#FF4C4A';
      break;
    case 9:
      result = '#DC3839';
      break;
    case 10:
      result = '#B32828';
      break;
  }

  return result;
}

function createDonutChart(props) {
  let totalVal = 0;
  let totalCounter = 0;

  for (let key of Object.keys(props)) {
    if (key.indexOf('index') !== -1) {
      const pollenType = Number(key.replace('index', ''));
      const pollenCount = props[key];

      if (!pollenCount) {
        continue;
      }

      totalVal += pollenType / pollenCount;
      totalCounter++;
    }
  }

  totalVal = Math.ceil(totalVal / totalCounter);

  //             let html = `<div>
  // <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  // 	 viewBox="60 50 420 420" style="width:50px;height:63px;" xml:space="preserve">
  //     <g>
  //         <path d="M256,512C136.5,356.1,76.8,245.2,76.8,179.2C76.8,80.2,157,0,256,0s179.2,80.2,179.2,179.2
  //             C435.2,245.2,375.5,356.1,256,512z M256,281.6c56.5,0,102.4-45.9,102.4-102.4S312.5,76.8,256,76.8s-102.4,45.8-102.4,102.4
  //             S199.4,281.6,256,281.6z" fill="${typeToColor(totalVal)}" />
  //     </g>
  // </svg>
  // <div style="background-color:#fff;border-radius:100%;color:#000;font-size:14px;transform:translate(11px, -52px);text-align:center;width:25px;height:25px;display:flex;align-items:center;justify-content:center">${props.point_count}</div>
  //             </div>`;

  let html = `<div>
<img src="/public/images/pollen/maps/m${totalVal}.png" alt="" />
<div style="background-color:#fff;border-radius:100%;color:#000;font-size:12px;transform:translate(8px, -54px);text-align:center;width:27px;height:25px;display:flex;align-items:center;justify-content:center">${props.point_count}</div>
            </div>`;

  const el = document.createElement('div');
  el.innerHTML = html;
  return el.firstChild;
}

function loadPoints(data) {
  console.log('loadPoints start');

  if (!data.length) {
    console.log('Empty data, removing layers...');
    removeClusterData();
    removePollenDataLayer();
    return;
  }

  var locations = [];
  var values = [];

  for (var key in data) {
    var item = data[key];

    locations[key] = {
      lat: parseFloat(item['latitude']),
      lng: parseFloat(item['longitude']),
    };

    values[key] = item['value'];
  }

  markers = locations.map(function (location, i) {
    if (values[i] == 1) index_marker = 1;
    else if (values[i] == 2) index_marker = 5;
    else index_marker = 10;

    return {
      type: 'Feature',
      properties: {
        icon2: '/public/images/pollen/maps/m' + index_marker + '.png',
        icon: 'm' + index_marker,
        count: 1,
        index: index_marker,
        title: values[i] == 1 ? 'Хорошее самочувствие' : values[i] == 2 ? 'Терпимое самочувствие' : 'Плохое самочувствие',
      },
      geometry: {
        coordinates: [location.lng, location.lat],
        type: 'Point',
      },
    };
  });

  if (map.getSource('pollen_data')) {
    removeClusterData();
    removePollenDataLayer();
    map.removeSource('pollen_data');
  }

  map.addSource('pollen_data', {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: markers },
    cluster: true,
    clusterMaxZoom: 13,
    clusterRadius: 55,
    clusterProperties: {
      index1: ['+', ['case', ['==', ['get', 'index'], 1], 1, 0]],
      index2: ['+', ['case', ['==', ['get', 'index'], 2], 1, 0]],
      index3: ['+', ['case', ['==', ['get', 'index'], 3], 1, 0]],
      index4: ['+', ['case', ['==', ['get', 'index'], 4], 1, 0]],
      index5: ['+', ['case', ['==', ['get', 'index'], 5], 1, 0]],
      index6: ['+', ['case', ['==', ['get', 'index'], 6], 1, 0]],
      index7: ['+', ['case', ['==', ['get', 'index'], 7], 1, 0]],
      index8: ['+', ['case', ['==', ['get', 'index'], 8], 1, 0]],
      index9: ['+', ['case', ['==', ['get', 'index'], 9], 1, 0]],
      index10: ['+', ['case', ['==', ['get', 'index'], 10], 1, 0]],
    },
  });

  if (map.getSource('fenology_data')) {
    map.removeSource('fenology_data');
  }

  map.addSource('fenology_data', {
    type: 'geojson',
    data: { type: 'FeatureCollection', features: [] },
  });

  addPollenDataLayer();

  function updateMarkers() {
    const newMarkers = {};
    const features = map.querySourceFeatures('pollen_data');

    // for every cluster on the screen, create an HTML marker for it (if we didn't yet),
    // and add it to the map if it's not there already
    for (const feature of features) {
      const coords = feature.geometry.coordinates;
      const props = feature.properties;
      if (!props.cluster) continue;
      const id = props.cluster_id;

      let marker = custMarkers[id];
      if (!marker) {
        const el = createDonutChart(props);
        marker = custMarkers[id] = new maplibregl.Marker({
          element: el,
        }).setLngLat(coords);
      }
      newMarkers[id] = marker;

      if (!markersOnScreen[id]) marker.addTo(map);
    }
    // for every marker we've added previously, remove those that are no longer visible
    for (const id in markersOnScreen) {
      if (!newMarkers[id]) markersOnScreen[id].remove();
    }
    markersOnScreen = newMarkers;
  }

  // after the GeoJSON data is loaded, update markers on the screen on every frame
  map.on('render', () => {
    if (!map.isSourceLoaded('pollen_data')) return;

    if (map.getLayer('fenology_data') && Object.values(markersOnScreen).length) {
      removeClusterData();
      return;
    }

    updateMarkers();
  });
}

function removeClusterData() {
  Object.values(markersOnScreen).forEach(marker => marker.remove());
  markersOnScreen = {};
}

function showOtzyvMarkers() {
  var locations = [];
  var values = [];
  markers = [];

  for (var i = 0; i < OtzyvData.length; i++) {
    var item = OtzyvData[i];

    markers.push(
      new google.maps.Marker({
        map: map,
        icon: {
          url: 'icon/doctor_' + item.state + '.png',

          //  scaledSize: new google.maps.Size(45, 56),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 20),
          labelOrigin: new google.maps.Point(21, 22),
        },

        title: item.header, // item.comment,
        position: {
          lat: parseFloat(item['latitude']),
          lng: parseFloat(item['longitude']),
        },
      })
    );

    markers[i].info = new google.maps.InfoWindow({
      content: '<p><strong>' + item.header + '</strong></p>' + '<p><strong>Описание:</strong> ' + item.comment + '</p>' + '<p><strong>Отзыв:</strong> ' + item.clients + '</p>' + '<p><a href="' + item.ref + '">' + 'сайт</a> ' + '(обновлено ' + item.date + ').</p>',

      maxWidth: 300,
    });

    google.maps.event.addListener(markers[i], 'click', function () {
      // this = marker
      var marker_map = this.getMap();
      this.info.open(marker_map, this);
    });

    //   markers.push();
  }
}

function addFenologyLayer() {
  map.addLayer({
    id: 'fenology_data',
    type: 'symbol',
    source: 'fenology_data',
    layout: {
      'icon-image': ['get', 'icon'],
      'icon-size': 0.5,
      'text-allow-overlap': true,
      'text-ignore-placement': true,
      'icon-allow-overlap': true,
    },
  });
}

function removeFenologyLayer() {
  if (map.getLayer('fenology_data')) {
    map.removeLayer('fenology_data');
  }
}

function addCirclesLayer() {
  if (!map.getLayer('circles')) {
    map.addLayer({
      id: 'circles',
      type: 'fill',
      source: 'circles',
      paint: {
        'fill-color': ['get', 'color'],
        'fill-opacity': ['get', 'opacity'],
      },
    });
  }
}

function removeCirclesLayer() {
  if (map.getLayer('circles')) {
    map.removeLayer('circles');
  }
}

function addPollenDataLayer() {
  removePollenDataLayer();

  map.addLayer({
    id: 'pollen_data_unclustered',
    type: 'symbol',
    source: 'pollen_data',
    filter: ['!', ['has', 'point_count']],
    layout: {
      'icon-image': ['get', 'icon'],
      'icon-size': 1,
      'text-allow-overlap': true,
      'text-ignore-placement': true,
      'icon-allow-overlap': true,

      'text-anchor': 'top',
      'text-field': ['get', 'count'],
      // 'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12,

      'text-anchor': 'top',
      'text-offset': [-0.25, -1.3],
      'text-max-width': 9,
    },
  });
}

function removePollenDataLayer() {
  if (map.getLayer('pollen_data_unclustered')) {
    map.removeLayer('pollen_data_unclustered');
  }
}

function showFenologMarkers() {
  addFenologyLayer();
  removePollenDataLayer();
  removeCirclesLayer();

  fenologyMarkers = {
    type: 'FeatureCollection',
    features: FenologData.map(item => {
      return {
        type: 'Feature',
        properties: {
          icon: 'icon/stage' + parseInt(item.state) + '-icon2x.png',
          description: fenologyTitle[item.state] + '. Комментарий фенолога: ' + item.comment,
        },
        geometry: {
          coordinates: [parseFloat(item['longitude']), parseFloat(item['latitude'])],
          type: 'Point',
        },
      };
    }),
  };

  map.getSource('fenology_data').setData(fenologyMarkers);
}

function showGraph(data, typeId) {
  var xAxis = [],
    yAxes = [];

  for (var i = 0; i < 8; i++) {
    var d = new Date();
    d.setTime(d.getTime() - 1000 * 60 * 60 * 12 * (7 - i));
    xAxis.push('' + d.getDate() + '.' + (d.getMonth() + 1) + ' ' + d.getHours() + ':00');
  }
  var chart = new Highcharts.Chart({
    title: {
      text:
        '<a href="https://pollen.club/sources/" target="_blank">Проблемы с самочувствием,<br> при аллергии на <b>' +
        types.find(function (element) {
          return element.id == typeId;
        }).desc +
        '</b> по отметкам аллергиков за прошедшие 4 дня</a>',
      style: {
        color: '#666666',
        fontSize: '14px',
      },
      align: 'left',
      x: 50,
    },
    chart: {
      renderTo: 'graph',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      style: { fontFamily: 'serif' },
    },
    xAxis: {
      categories: xAxis,
    },

    yAxis: {
      title: {
        text: 'Балл (от 1 (хорошо) до 10 (плохо)',
      },
      min: 0,
      max: 10,
      tickInterval: 2,
    },

    tooltip: {
      formatter: function () {
        if (this.y == 0) {
          return '15% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 1) {
          return '30% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 2) {
          return '35% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 3) {
          return '40% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 4) {
          return '45% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 5) {
          return '50% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 6) {
          return '55% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 7) {
          return '60% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 8) {
          return '75% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 9) {
          return '85% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        } else if (this.y == 10) {
          return 'более 85% пользователей отмечают<br/>' + 'проблемы с самочувствием<br/>' + 'в течение 12 часов до: ' + this.x;
        }
      },
    },

    series: [
      {
        name: types.find(function (element) {
          return element.id == typeId;
        }).desc,
        type: 'spline',
        data: getIndexValuesForIntervals(data, typeId),
        showInLegend: false,
        zones: [
          {
            value: 1.5,
            color: '#DCDCDC',
          },
          {
            value: 4.5,
            color: '#00b147',
          },
          {
            value: 7.5,
            color: '#F19F33',
          },
          {
            value: 10.5,
            color: '#E9403F',
          },
        ],
      },
    ],
    exporting: {
      buttons: {
        contextButton: {
          symbol: 'circle',
          symbolSize: '9',
          symbolStroke: '#DCDCDC',
          symbolFill: '#DCDCDC',
        },
      },
    },
  });
}

function showGraph2(data, typeId) {
  var xAxis = [],
    yAxes = [];
  for (var i = 0; i < 5; i++) {
    var d = new Date();
    d.setDate(d.getDate() + i);
    xAxis.push('' + (d.getDate() > 9 ? '' : '0') + d.getDate() + '.' + (d.getMonth() > 8 ? '' : '0') + (d.getMonth() + 1));
    var dd = '' + d.getFullYear() + '-' + (d.getMonth() > 8 ? '' : '0') + (d.getMonth() + 1) + '-' + (d.getDate() > 9 ? '' : '0') + d.getDate();
    var c;
    c = null;
    for (var j = 0; j < data.length; j++) {
      if (data[j].date == dd)
        if (!c) c = data[j];
        else if (c.id < data[j].id) c = data[j];
    }
    if (c !== null) yAxes.push(c ? parseInt(c.level) : 0);
    else yAxes.push(null);
  }
  var chart = new Highcharts.Chart({
    title: {
      text:
        '<a href="https://pollen.club/sources/" target="_blank">Прогноз уровня пыльцы<br> <b>' +
        types.find(function (element) {
          return element.id == typeId;
        }).desc +
        '</b> в Москве на 5 дней</a>',
      style: {
        color: '#666666',
        fontSize: '14px',
      },
      align: 'left',
      x: 50,
    },

    chart: {
      renderTo: 'graph2',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      style: { fontFamily: 'serif' },
    },
    xAxis: {
      categories: xAxis,
    },

    tooltip: {
      formatter: function () {
        if (this.y == 0) {
          return 'Нет пыльцы, 0 ед./м3 <br/>';
          'на дату: ' + this.x;
        } else if (this.y == 1) {
          return 'Низкий  уровень пыльцы, 1-10 ед./м3 <br/>';
          'на дату: ' + this.x;
        } else if (this.y == 2) {
          return 'Средний уровень пыльцы, 11-100 ед./м3<br/>' + '(травы 11-30)<br/>' + 'на дату: ' + this.x;
        } else if (this.y == 3) {
          return 'Высокий уровень пыльцы, 101-1000 ед./м3<br/>' + '(травы 31-100)<br/>' + 'на дату: ' + this.x;
        } else if (this.y == 4) {
          return 'Оч. высокий уровень пыльцы, 1001-5000 ед/м3<br/>' + '(травы >100)<br/>' + 'на дату: ' + this.x;
        } else if (this.y == 5) {
          return 'Экстра уровень пыльцы(>5000 ед/м3)<br/>' + 'на дату: ' + this.x;
        }
      },
    },

    yAxis: {
      categories: ['Нет', 'Низкий', 'Средний', 'Высокий', 'Очень высокий', 'Экстра'],
      title: { text: 'Уровень аллергена в воздухе' },
    },

    series: [
      {
        name: types.find(function (element) {
          return element.id == typeId;
        }).desc,
        type: 'spline',
        data: yAxes,
        showInLegend: false,
        zones: [
          {
            value: 0.5,
            color: '#DCDCDC',
          },
          {
            value: 1.5,
            color: '#00b147',
          },
          {
            value: 2.5,
            color: '#F5D033',
          },
          {
            value: 3.5,
            color: '#F19F33',
          },
          {
            value: 4.5,
            color: '#FF4500',
          },
          {
            value: 5.5,
            color: '#8E43C7',
          },
        ],
      },
    ],
    exporting: {
      buttons: {
        contextButton: {
          symbol: 'circle',
          symbolSize: '9',
          symbolStroke: '#DCDCDC',
          symbolFill: '#DCDCDC',
        },
      },
    },
  });
}

function getIndexValuesForIntervals(data, typeId) {
  intervals = [];
  for (var i = 0; i < 8; i++) {
    var d = new Date();
    var from = new Date(d.getTime() - 1000 * 60 * 60 * 6 * (8 - i));
    var to = new Date(from.getTime() + 1000 * 60 * 60 * 6);
    var fromtime = parseInt(from.getHours() * 60 * 60 + from.getMinutes() * 60);
    var totime = parseInt(to.getHours() * 60 * 60 + to.getMinutes() * 60);
    var fromdate = '' + from.getFullYear() + '-' + (from.getMonth() > 8 ? '' : '0') + (from.getMonth() + 1) + '-' + (from.getDate() > 9 ? '' : '0') + from.getDate() + ' 00:00:00';
    var todate = '' + to.getFullYear() + '-' + (to.getMonth() > 8 ? '' : '0') + (to.getMonth() + 1) + '-' + (to.getDate() > 9 ? '' : '0') + to.getDate() + ' 00:00:00';

    intervals.push({ fromdate: fromdate, fromtime: fromtime, todate: todate, totime: totime, rows: [] });
  }
  l: for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < intervals.length; j++) {
      if (checkInterval(intervals[j], data[i])) continue l;
    }
  }
  var indexVales = [];
  for (var i = 0; i < intervals.length; i++) {
    try {
      indexVales.push(calculateIndex(intervals[i].rows)[typeId].ball);
    } catch (ex) {
      indexVales.push(0);
    }
  }
  return indexVales;
}
function checkInterval(interval, row) {
  if (interval.fromdate == interval.todate) {
    if (row.date == interval.fromdate && parseInt(row.time) > interval.fromtime && parseInt(row.time) <= interval.totime) {
      interval.rows.push(row);
      return true;
    }
  } else {
    if ((row.date == interval.fromdate && parseInt(row.time) > interval.fromtime) || (row.date == interval.todate && parseInt(row.time) <= interval.totime)) {
      interval.rows.push(row);
      return true;
    }
  }
  return false;
}
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

function initQuoras() {
  $.ajax({ url: 'https://test.pollen.club/maps/banner.php' }).done(function (data) {
    var content = '';
    for (var i = 0; i < data.length; i++) {
      content += '<div class="cbp-qtcontent"><p><img height="70" width="70" src="' + 'icon/' + data[i].experts_site + '.png' + '"  />' + data[i].comment + '<b>' + data[i].expert_name + '</b></p></div><div class="cbp-qtprogress"></div>';
    }
    $('#cbp-qtrotator').html(content);
    $('#cbp-qtrotator').cbpQTRotator({
      // default transition speed (ms)
      speed: 700,
      // default transition easing
      easing: 'ease',
      // rotator interval (ms)
      interval: 35000,
    });
    $('#cbp-qtrotator').show();
  });
}
