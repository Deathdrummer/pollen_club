<!DOCTYPE html>
<!-- [if IE]><![endif] -->
<!-- [if IE 8 ]><html dir="ltr" lang="ru" class="ie8"><![endif] -->
<!-- [if IE 9 ]><html dir="ltr" lang="ru" class="ie9"><![endif] -->
<!-- [if (gt IE 9)|!(IE)]><! -->
<html dir="ltr" lang="ru" prefix="og: http://ogp.me/ns#" class="page">
  <head itemscope itemtype="http://schema.org/WPHeader">
    <meta charset="UTF-8" />
    <meta name="author" content="Дмитрий Калюжнный" />
    <meta name="copyright" content="Deathdrumer &copy; Web разработка" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" />

    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="format-detection" content="telephone=no" /> <!-- отключение автоопределения номеров для Safari (iPhone / IPod / IPad) и Android браузера -->
    <meta http-equiv="x-rim-auto-match" content="none" /> <!-- отключение автоопределения номеров для BlackBerry -->
    <meta itemprop="keywords" name="keywords" content="{{ meta_keywords|default('') }}" />
    <meta itemprop="description" name="description" content="{{ meta_description|default('') }}" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ og.title }}" />
    <meta property="og:description" content="{{ og.description }}" />
    <meta property="og:url" content="{{ og.url }}" />
    <meta property="og:image" content="{{ base_url('public/filemanager/' ~ og.image) }}" />
    <meta property="og:site_name" content="{{ og.site_name }}" />

    {% if not hosting %}
      <meta http-equiv="cache-control" content="no-cache" />
    {% endif %}
    {% if not hosting %}
      <meta http-equiv="expires" content="1" />
    {% endif %}
    {% if metatags %}{{ metatags|raw }}{% endif %}
    <link rel="shortcut icon"
      href="{% if favicon %}
        {{ base_url('public/filemanager/' ~ favicon) }}
      {% else %}
        {{ base_url('public/images/favicon.png') }}
      {% endif %}" />

    <link rel="stylesheet" href="{{ base_url('public/css/assets.min.css') }}" />
    <link rel="stylesheet" href="{{ base_url('public/css/plugins.min.css') }}" />
    <link rel="stylesheet" href="{{ base_url('public/css/components.min.css') }}" />
    <link rel="stylesheet" href="{{ base_url('public/css/swiper-bundle.min.css') }}" />
    {% if is_file('public/css/' ~ controller ~ '.min.css') %}
      <link rel="stylesheet" href="{{ base_url('public/css/' ~ controller ~ '.min.css') }}" />
    {% endif %}
    {% if styles_head %}{{ styles_head|raw }}{% endif %}

    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
    <script src="{{ base_url('public/js/plugins.min.js') }}"></script>
    <script src="{{ base_url('public/js/functions.js') }}"></script>
    <script src="{{ base_url('public/js/common.js') }}"></script>
    <script src="{{ base_url('public/js/components.min.js') }}"></script>
    <script src="{{ base_url('public/js/ddrFormSubmit.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/3.0.1/chartjs-plugin-annotation.min.js" integrity="sha512-Hn1w6YiiFw6p6S2lXv6yKeqTk0PLVzeCwWY9n32beuPjQ5HLcvz5l2QsP+KilEr1ws37rCTw3bZpvfvVIeTh0Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    {% if hosting %}
      {% if scripts %}{{scripts|raw}}{% endif %}
      {% if scripts_head %}{{scripts_head|raw}}{% endif %}
    {% endif %}

    {% if hosting %}{% include 'views/' ~ controller ~ '/layout/hosting.tpl' %}{% endif %} <!-- Если сайт на хостинге - выполнять функции -->
    <title itemprop="headline">{{ page_title|default('Страница без заголовка') }}</title>
  </head>
  <body data-scroll-block="body" id="body" class="page__body">
    <div class="wrapper">
      {% if svg_sprite %}{{ svg_sprite|raw }}{% endif %} {# Вставляем SVG спрайт #}
      {% if header %}{% include 'views/' ~ controller ~ '/layout/header.tpl' %}{% endif %}
      {% if nav_mobile %}{% include 'views/' ~ controller ~ '/layout/nav_mobile.tpl' %}{% endif %}
      <main class="main">
        {% if sections %}
          {% for section in sections %}
            {% include 'views/' ~ controller ~ '/sections/' ~ (section.filename|ext('tpl')) with section.data %}
          {% endfor %}
        {% endif %}
      </main>
      {% if footer %}{% include 'views/' ~ controller ~ '/layout/footer.tpl' %}{% endif %}
      {% if scrolltop %}
        <div scrolltop class="hidden-sm-down">
          <svg>
            <use xlink:href="{{ scrolltop }}"></use>
          </svg>
        </div>
      {% endif %}
      {% if stockicon.url and seo_url != stockicon.url %}
        <a href="{{ stockicon.url }}" class="stockicon" title="{{ stockicon.link_title }}"><span class="stockicon__icon">%</span></a>
      {% endif %}
    </div>

    <script defer src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css" />
    {# скрипты из хостинга https://test.pollen.club/maps/map.html #}
      {# <script src="{{ base_url('public/js/pollen/highcharts.js') }}"></script>
      <script src="{{ base_url('public/js/pollen/exporting.js') }}"></script>
      <script src="{{ base_url('public/js/pollen/modernizr.custom.js') }}"></script>
      <script src="{{ base_url('public/js/pollen/jquery.cbpQTRotator.js') }}"></script> #}
        <script>
            function closeGoogleDialog() {
                if ($(".dismissButton").length > 0) {(".dismissButton").click()}
                else{
                    setTimeout(closeGoogleDialog, 500);
                }}
            closeGoogleDialog();
        </script>
        {# <script src="https://cdn.jsdelivr.net/npm/maplibre-gl@3.5.2/dist/maplibre-gl.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/maplibre-gl@3.5.2/dist/maplibre-gl.min.css">
        <script src="https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js"></script>
        <script src="{{ base_url('public/js/pollen/main.js') }}"></script> #}
    {# скрипты из хостинга https://test.pollen.club/maps/map.html #}
    {# <script type="module" src="{{base_url('public/js/modelViewer.js')}}"></script> #}
    <script src="{{ base_url('public/js/swiper-bundle.min.js') }}"></script>
    {% if scripts_end %}{{ scripts_end|raw }}{% endif %}

    


    {% if is_file('public/js/' ~ controller ~ '.js') %}
      <script src="{{ base_url('public/js/' ~ controller ~ '.js') }}"></script>
    {% endif %}
  </body>
</html>
