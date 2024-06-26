<script type="module">
  function loadScript(url, callback) {
    // adding the script element to the head as suggested before
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
  
    // then bind the event to the callback function
    // there are several events for cross browser compatibility
    script.onreadystatechange = callback
    script.onload = callback
  
    // fire the loading
    head.appendChild(script)
  }
  loadScript('public/js/pollen/highcharts.js')
  loadScript('public/js/pollen/exporting.js')
  loadScript('public/js/pollen/modernizr.custom.js')
  loadScript('public/js/pollen/jquery.cbpQTRotator.js')
</script>

<section class="section section_map">
  <div class="content-header">
    <h1 class="content-title blue">Уровень пыльцы и самочувствия</h1>
    <div class="content-main__map">
      <a href="/" class="content-main__map-link">
        <p class="content-main__map-text">
          <span class="content-main__map-text__link">Закрыть карту</span>
          <span class="content-main__map-text__icon"><img src="{{ base_url('public/images/pollen/icons/map-zoom.svg') }}" loading="lazy" alt="" /></span>
        </p>
      </a>
    </div>
  </div>
  <div class="map-wrapper">
    {# <div id="preloader" style="background-color:#fff;border-radius:15px;position:absolute;bottom:20px;left:50%;padding: 6px 12px;z-index:2;translate(-50%, 0);display:none;">загрузка...</div> #}
    <div id="map"></div>
    <div class="content-main__map">
      <a href="/" class="content-main__map-link">
        <p class="content-main__map-text">
          <span class="content-main__map-text__link">Закрыть карту</span>
          <span class="content-main__map-text__icon"><img src="{{ base_url('public/images/pollen/icons/map-zoom.svg') }}" loading="lazy" alt="" /></span>
        </p>
      </a>
    </div>
    <div id="header" class="header__map">
      <ul class="header__map-menu">
        <li class="dropdown">
          <a href="https://api.pollen.club/static/map.html" target="_blank" class="dropbtn">Прогноз SILAM</a>
        </li>
        <li class="dropdown">
          <a class="dropbtn" id="pollenbtn">Прогноз +5 дней</a>
        </li>
        <ul class="dropdown-content main_select" id="select" style="display:none"></ul>
        <li class="archive_dropdown dropdown">
          <a class="dropbtn" id="archive_btn">Архивы</a>
        </li>
        <ul class="dropdown-content archive_select" id="archive_select" style="display:none"></ul>
        <li class="fenolog">
          <a>Фенология</a>
        </li>
        <li class="support">
          <a href="/support-project/" target="_blank" class="dropbtn">Поддержи проект</a>
        </li>
        <li class="news">
          <a href="/gid-alergika/" target="_blank">Новости</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="content__map">
    <div class="content__reklama content-main__reklama">
      {% if reklama_map %}
        {% for item in reklama_map %}
          <div class="reklama-item">
            <div class="photo reklama-item__photo">
              <img src="{{ base_url('public/filemanager/' ~ item.img) }}" loading="lazy" alt="" />
            </div>
            <div class="reklama-item__content">
              <h3 class="reklama-item__title">{{ item.title }}</h3>
              <p class="reklama-item__text">{{ item.text }}</p>
              <a href="{{ item.link }}" class="reklama-item__link">{{ item.text_link }}</a>
            </div>
          </div>
        {% endfor %}
      {% endif %}
    </div>
  </div>
</section>
