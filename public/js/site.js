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
  var swiperSliderNews = new Swiper('.news-gallery .swiper-container', {
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
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1640: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  var swiperSliderNewsMain = new Swiper('.main-sections .news-gallery .swiper-container', {
    slidesPerView: 1.2,
    mousewheel: true,
    spaceBetween: 10,
    variableWidth: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: { loopedSlides: 2, slidesPerView: 2 },
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
