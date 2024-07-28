{# <script type="module">
     function loadScript(url, callback) {
       // adding the script element to the head as suggested before
       var head = document.getElementsByTagName('head')[0]
       var script = document.createElement('script')
     
       script.src = url
     
       // then bind the event to the callback function
       // there are several events for cross browser compatibility
       script.onreadystatechange = callback
       script.onload = callback
     
       // fire the loading
       head.appendChild(script)
     }
     loadScript('https://code.jquery.com/jquery-2.2.4.min.js')
     loadScript('public/js/pollen/highcharts.js')
     loadScript('public/js/pollen/exporting.js')
     loadScript('public/js/pollen/modernizr.custom.js')
     loadScript('public/js/pollen/jquery.cbpQTRotator.js')
     loadScript('https://cdn.jsdelivr.net/npm/maplibre-gl@3.5.2/dist/maplibre-gl.min.js')
     loadScript('https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js')
     
     loadScript('public/js/pollen/main.js')
   </script> #}

<script src="{{ base_url('public/js/pollen/highcharts.js') }}"></script>
<script src="{{ base_url('public/js/pollen/exporting.js') }}"></script>
<script src="{{ base_url('public/js/pollen/modernizr.custom.js') }}"></script>
<script src="{{ base_url('public/js/pollen/jquery.cbpQTRotator.js') }}"></script>
<script src="https://cdn.jsdelivr.net/npm/maplibre-gl@3.5.2/dist/maplibre-gl.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js"></script>

<script src="{{ base_url('public/js/pollen/main.js') }}"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/maplibre-gl@3.5.2/dist/maplibre-gl.min.css" />

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
  <div class="content__map content__maps">
    <div class="content__reklama content-main__reklama">
      {% set current_date = date('Y-m-d') %}
      {% set bannerArrMaps = [] %}

      {% for item in reklama[2] %}
        {% set date_min = item.date_min|date('Y-m-d') %}
        {% set date_max = item.date_max|date('Y-m-d') %}
        {% if current_date >= date_min and current_date <= date_max %}
          {% set bannerArrMaps = bannerArrMaps|merge([item]) %}
        {% endif %}
      {% endfor %}
      {% for item in bannerArrMaps|slice(0, 1) %}
        {% set img_mobile = item.img_mobile ?? item.img %}
        {# {% if not item.text %} reklama-item__banner{% endif %} #}
        <a href="{{ item.href }}" target="_blank" class="reklama-item{% if not item.text %}{% endif %}" style="display: none;">
          <div class="photo reklama-item__photo">
            {% if item.img %}
              <input type="hidden" class="reklama-item__bannerMobile" value="{{ base_url('public/filemanager/' ~ img_mobile) }}" />
              <input type="hidden" class="reklama-item__bannerDesktop" value="{{ base_url('public/filemanager/' ~ item.img) }}" />
              <img class="reklama-item__bannerModalImage" alt="{{ item.title }}" />
            {% else %}
              <img src="{{ base_url('public/filemanager/' ~ item.main_image.file) }}" loading="lazy" alt="{{ item.main_image.alt }}" />
            {% endif %}
          </div>
          {% if item.title and item.text %}
            <div class="reklama-item__content">
              <h3 class="reklama-item__title">{{ item.title }} <div class="reklama-close"></div></h3>
              <p class="reklama-item__text">{{ item.text ? : item.short_desc }}</p>
              {% if item.text_link %}
                <a href="{{ item.href }}" target="_blank" class="reklama-item__link">{{ item.text_link ? : 'Подробнее' }}</a>
              {% endif %}
            </div>
          {% else %}
            <div onclick="event.preventDefault()" class="reklama-close"></div>
          {% endif %}
        </a>
      {% endfor %}
    </div>
  </div>
  <div class="content__map content__silam" style="display: none;">
    <div class="content__reklama content-main__reklama">
      {% set current_date = date('Y-m-d') %}
      {% set bannerArrSilam = [] %}

      {% for item in reklama[5] %}
        {% set date_min = item.date_min|date('Y-m-d') %}
        {% set date_max = item.date_max|date('Y-m-d') %}
        {% if current_date >= date_min and current_date <= date_max %}
          {% set bannerArrSilam = bannerArrSilam|merge([item]) %}
        {% endif %}
      {% endfor %}
      {% for item in bannerArrSilam|slice(0, 1) %}
        {% set img_mobile = item.img_mobile ?? item.img %}
        {# {% if not item.text endif %}reklama-item__banner{% endif %} #}
        <a href="{{ item.href }}" target="_blank" class="reklama-item {% if not item.text %}{% endif %}">
          <div class="photo reklama-item__photo">
            {% if item.img %}
              <input type="hidden" class="reklama-item__bannerMobile" value="{{ base_url('public/filemanager/' ~ img_mobile) }}" />
              <input type="hidden" class="reklama-item__bannerDesktop" value="{{ base_url('public/filemanager/' ~ item.img) }}" />
              <img class="reklama-item__bannerModalImage" alt="{{ item.title }}" />
            {% else %}
              <img src="{{ base_url('public/filemanager/' ~ item.main_image.file) }}" loading="lazy" alt="{{ item.main_image.alt }}" />
            {% endif %}
          </div>
          {% if item.title and item.text %}
            <div class="reklama-item__content">
              <h3 class="reklama-item__title">{{ item.title }} <div class="reklama-close"></div></h3>
              <p class="reklama-item__text">{{ item.text ? : item.short_desc }}</p>
              {% if item.text_link %}
                <a href="{{ item.href }}" target="_blank" class="reklama-item__link">{{ item.text_link ? : 'Подробнее' }}</a>
              {% endif %}
            </div>
          {% else %}
            <div onclick="event.preventDefault()" class="reklama-close"></div>
          {% endif %}
        </a>
      {% endfor %}
    </div>
  </div>
  <div class="map-wrapper">
    {# <div id="preloader" style="background-color:#fff;border-radius:15px;position:absolute;bottom:20px;left:50%;padding: 6px 12px;z-index:2;translate(-50%, 0);display:none;">загрузка...</div> #}
    <iframe width="100%" height="100%" id="silam" src="{{ silam_link }}" frameborder="0"></iframe>
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
        <li id="silambtn" class="dropdown">
          <span class="dropbtn">Прогноз SILAM</span>
        </li>
        <li class="dropdown">
          <div class="dropbtn" id="pollenbtn">Прогноз +5 дней</div>
          <ul class="dropdown-content main_select" id="select" style="display:none"></ul>
        </li>
        <li class="archive_dropdown dropdown">
          <div class="dropbtn" id="archive_btn">Архивы</div>
          <ul class="dropdown-content archive_select" id="archive_select" style="display:none"></ul>
        </li>
        <li class="fenolog">
          <div class="dropbtn">Фенология</div>
        </li>
        <li class="support">
          <a href="/support-project/" target="_blank" class="dropbtn">Поддержи проект</a>
        </li>
        <li class="news">
          <a href="/gid-alergika/" target="_blank">Новости</a>
        </li>
      </ul>
    </div>
    <div class="banner-wrapper">
      <div id="bannerBlock">
        <div class="dell">
          <a>&#10006;</a>
        </div>
        <div class="arh_block">
          <a class="close_a"></a>
          <p>
            <b><span style="text-align: left;font-size: 14px;font-family:HelveticaNeueCyr">Описание цветовой шкалы карты&nbsp;</span></b>
          </p>
          <p>
            <span style="font-family: HelveticaNeueCyr; font-size: 14px;">Цвет круга показывает степень возможного воздействия пыльцы на аллергика.</span>
          </p>
          <p>
            <span style="font-family: HelveticaNeueCyr; font-size: 14px;">Ключ: уровень влияния (процент пользователей, с отметками о проблемах с самочувствием; уровень пыльцы):</span>
          </p>
          <p>&nbsp;</p>
          <ul>
            <li>
              <p>
                <font color="#000000">
                  <span style="font-family: HelveticaNeueCyr;"><font color="#009900">слабое&nbsp;</font></span>
                </font>
                <font color="#009900" style="font-family: HelveticaNeueCyr;">
                  <font color="#696969">&nbsp;</font>
                </font><span style="color: #696969; font-family: HelveticaNeueCyr; font-size: 14px;">(&lt;</span><span style="color: #696969; font-family: HelveticaNeueCyr; font-size: 14px;">15%; &lt;10&nbsp;ед/м3),</span>
              </p>
            </li>
            <li>
              <p>
                <font color="#000000">
                  <span style="font-family: HelveticaNeueCyr;">
                    <font color="#696969">
                      <font style="background-color:#ffff00;">среднее</font>
                    </font>
                  </span>
                </font>
                <font color="#009900" style="font-family: HelveticaNeueCyr;">&nbsp;</font>
                <font color="#696969" style="font-family: HelveticaNeueCyr;">
                  <font color="#009900">
                    <font color="#696969">&nbsp;</font>
                  </font><span style="font-size: 14px;">(&lt;3</span><span style="font-size: 14px;">0%; &gt;10&nbsp;ед/м3),</span>&nbsp;
                </font>
              </p>
            </li>
            <li>
              <p>
                <font color="#000000">
                  <span style="font-family: HelveticaNeueCyr;"><font color="#FF8C00">высокое</font></span>
                </font>
                <font color="#009900" style="font-family: HelveticaNeueCyr;">&nbsp;</font>
                <font color="#696969" style="font-family: HelveticaNeueCyr;">
                  <font color="#009900">
                    <font color="#696969">&nbsp;</font>
                  </font><span style="font-size: 14px;">(&lt;5</span><span style="font-size: 14px;">0%; &gt;100 ед/м3 (травы - 30)),</span>&nbsp;
                </font>
              </p>
            </li>
            <li>
              <p>
                <font color="#000000">
                  <span style="font-family: HelveticaNeueCyr;"><font color="#FF0000">очень высокое</font></span>
                </font>
                <font color="#009900" style="font-family: HelveticaNeueCyr;">
                  &nbsp;<font color="#696969">-&nbsp;</font>
                </font><span style="color: #696969; font-family: HelveticaNeueCyr; font-size: 14px;">(&lt;70</span><span style="color: #696969; font-family: HelveticaNeueCyr; font-size: 14px;">%; &gt;1000 ед/м3 (травы -100)),</span>
              </p>
            </li>
            <li>
              <p>
                <font color="#000000">
                  <span style="font-family: HelveticaNeueCyr;"><font color="#800080">экстра</font></span>
                </font>
                <font color="#009900" style="font-family: HelveticaNeueCyr;">
                  &nbsp;<font color="#696969">
                    -<span style="font-size: 14px;">&nbsp;(&gt;70%; &gt;5000 ед/м3 (100 для трав)).</span>
                  </font>
                </font>
              </p>
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <span style="font-size:14px">
              <a href="https://test.pollen.club/map_source/" target="_blank">Подробнее</a>
              о шкале и данных
            </span>
          </p>
        </div>
        <div class="graph" id="graph"></div>
        <div class="graph2" id="graph2"></div>
        <div id="cbp-qtrotator" class="cbp-qtrotator" temp></div>
      </div>
      <div class="store">
        <a href="https://play.google.com/store/apps/details?id=pollen.sgolovanov.pollen2" target="_blank" class="googlestore"></a>
        <a href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=988384559&mt=8" target="_blank" class="applestore"></a>
      </div>
    </div>
  </div>
</section>
