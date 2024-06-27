<section class="section contacts">
  {# {% if data_scroll_id %} id="{{data_scroll_id}}"{% endif %}{% if data_scroll_block %} data-scroll-block="{{data_scroll_block}}"{% endif %} #}
  <div class="content-header">
    <div class="content-header__left">
      <h1 class="content-header__title title-gradient">{{ title_page|raw }}</h1>
    </div>
    <div class="content-header__right">
      <div class="content-col-2">
        <div class="content-description story">{{ text_content_1|raw }}</div>
        <div class="content-description story">{{ text_content_2|raw }}</div>
      </div>
    </div>
  </div>

  <div class="content-contacts">
    <div class="achievements">
      <h3 class="content-title achievements-title title-medium">{{ achievements_title }}</h3>

      <div class="achievements-list-wrapper">
        <div class="achievements-list achievements-slider">
          <ul class="swiper-wrapper">
            {% for item in achievements_list %}
              <li class="swiper-slide">
                <p>{{ item.text }}</p>
              </li>
            {% endfor %}
          </ul>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  </div>
</section>
