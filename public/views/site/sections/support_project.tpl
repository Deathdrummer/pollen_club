<section class="section support">
  <div class="content-header">
    <div class="content-header__left">
      <h1 class="content-header__title title-gradient">{{ title_page }}</h1>
    </div>
    <div class="content-header__right">
      <div class="content-col-2">
        <div class="content-description story">{{ content_1|raw }}</div>
        <div class="content-description story">{{ content_1|raw }}</div>
      </div>
      <div class="advantages-application">
        <div class="advantages-circle circle-1 bcg-green-bef"></div>
        <div class="advantages-circle circle-2 bcg-orange-bef"></div>
      </div>
    </div>
  </div>

  <div class="content-support">
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
  <div class="content-support-finance">
    <div class="finance-col finance-first-col">
      <h3 class="content-title section-title green">{{ title_finance }}</h3>
      <div class="story">
        {{ text_finance|raw }}
        {% for item in progress %}
          <div class="finance-progress">
            <div class="finance-progress__wrapper">
              <span class="finance-progress__sum">{{ item.value|number_format(0, ',', ' ') }} ({{ item.value * 100 / item.max }}%)</span>
              <progress class="finance-progress__bar" value="{{ item.value * 100 / item.max }}" max="100"></progress>
            </div>
            <span class="finance-progress__max">{{ item.max|number_format(0, ',', ' ') }}</span>
          </div>
        {% endfor %}
      </div>
    </div>
    <div class="finance-col finance-banks-col">
      <div class="finance-col-wrapper">
        <h3 class="content-title section-title orange">Оказать финансовую помощь:</h3>
        <div class="finance-banks">
          {% for item in list_banks %}
            {% if item.text and item.number %}
              <div class="finance-banks-row">
                <p>
                  {{ item.text }} <span class="text-copy">{{ item.number }}</span>
                </p>
                <div class="copy"></div>
              </div>
            {% else %}
              <div class="finance-banks-row">
                <a class="title-gradient" href="{{ item.link }}">{{ item.link_text }}</a>
              </div>
            {% endif %}
          {% endfor %}
        </div>
      </div>
      <a class="finance-link" href="#">Ознакомиться с полным текстов оферты</a>
    </div>
    <div class="finance-col finance-last-col">
      <div class="finance-col-wrapper">
        <h3 class="content-title section-title blue">{{ title_finance_last }}</h3>
        <div class="finance-last">
          {% set reversedDonate = donate|reverse %}
          {% for donat in reversedDonate|slice(0, 4) %}
            <span>{{ donat.name }}</span>
            <span class="finance-sum">{{ donat.price }} ₽</span>
            <span>{{ donat.date }}</span>
          {% endfor %}
        </div>
      </div>
      <span class="finance-link finance-link-popup">Полный список</span>
    </div>
    <div class="finance-col finance-static-col">
      <div class="finance-static-content">{{ finance_static_content_1|raw }}</div>
      <div class="finance-static-author">{{ finance_static_content_2|raw }}</div>
    </div>
  </div>
</section>
