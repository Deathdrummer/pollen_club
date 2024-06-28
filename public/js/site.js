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
          });
        });
      }
    );
  });

  $('.drowdown-block__active').on('click', function () {
    $(this).toggleClass('active');
    $('.drowdown-block__list').toggleClass('active');
  });

  $('.drowdown-block__list li').on('click', function () {
    $('.drowdown-block__active').text($(this).text());
    $('.drowdown-block__active').addClass('active');
    $('.drowdown-block__list li').removeClass('active');
    $(this).addClass('active');
    $('.drowdown-block__list').removeClass('active');
    $('.drowdown-block__active').removeClass('active');
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

  $.ajax({
    type: 'GET',
    url: '/ajax/get_all_hashtags',
    dataType: 'json',
    data: {
      /*url: 'https://test.pollen.club/maps/pollen_type.php',
      params: {
        type: 1
      }*/
      //field: 'title',
      //value: 'За 2 дня до начала',
      //returnFields: ['title', 'seo_url']
    },
    beforeSend: function () {},
    success: function (r) {
      console.log(r);
    },
    error: function (e, status) {
      console.log(e, status);
    },
    complete: function () {
      console.log('complete');
    },
  });

  // поиск
  const search = $('.search');
  const searchClose = $('.search-close');
  const searchInput = $('.search input');

  if (search) {
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

            if (postTags.includes(selectedTag) || selectedTag === 'Все статьи') {
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
