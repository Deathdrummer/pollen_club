<sections class="main-sections">
  <div class="main-block">
    <div class="content-main">
      <div class="content-main__content">
        <h1 class="content-title blue">{{ title_page }}</h1>
        <div class="content-main__conten-main-section">
          <div class="content-description story">
            <p>{{ desc_page }}</p>
          </div>

          <div class="drowdown-block">
            <span class="drowdown-block__active">Береза</span>
            <ul class="drowdown-block__list">
              <li class="active">
                <span>Береза</span>
              </li>
              <li>
                <span>Злахи</span>
              </li>
              <li>
                <span>Ясен</span>
              </li>
              <li>
                <span>Ольха</span>
              </li>
              <li>
                <span>Ольха</span>
              </li>
              <li>
                <span>Ольха</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="pollen-level">
          <div class="pollen-level__left">
            <div class="photo">
              <img src="{{ base_url('public/images/pollen/bereza.png') }}" loading="lazy" alt="" />
              <span class="photo-text">Береза</span>
            </div>
          </div>
          <div class="pollen-level__right">
            <div class="pollen-level__item">
              <span class="level-item__title">Уровень пыльцы</span>
              <div class="level-item__content">
                <span class="level-item__content-text orange">Высокий</span>
                <div class="level-item__content-progress bcg-grad--orane"></div>
              </div>
            </div>
            <div class="pollen-level__item">
              <span class="level-item__title">Индекс самочувствия</span>
              <div class="level-item__content">
                <span class="level-item__content-text blue">6 Баллов</span>
                <div class="level-item__content-progress bcg-grad--blue"></div>
              </div>
            </div>
            <div class="pollen-level__item">
              <span class="level-item__title">Динамика самочувствия</span>
              <div class="level-item__content">
                <canvas id="myChart"></canvas>
              </div>
            </div>
            <div class="pollen-level__item">
              <span class="level-item__title">Аллерго прогноз</span>
              <div class="level-item__content">
                <div class="level-item__prognoz">
                  <img src="{{ base_url('public/images/pollen/prognoz.svg') }}" loading="lazy" alt="" />
                  <p class="level-item__prognoz-text green">Доступен в&nbsp;приложении</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-main__content-news">
          <h2 class="content-title">
            <a href="/gid-alergika/" class="content-main__news-all">
              <span class="news-all-text">{{ title_news }}</span>
              <span class="news-all-icon" style=" mask-image: url({{ base_url('public/images/pollen/icons/arrow.svg') }})"></span>
            </a>
          </h2>
          <div class="news-gallery">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                {% for item in news_last.items %}
                  <div class="swiper-slide">
                    <div class="card-news">
                      <div class="card-news__photo">
                        <img loading="lazy" src="{{ base_url('public/filemanager/' ~ item.main_image.file) }}" alt="{{ item.main_image.alt }}" role="group" />
                      </div>
                      <div class="card-news__content">
                        <h3 class="card-news__content-title">{{ item.title }}</h3>
                        <p class="card-news__content-text">{{ item.short_desc }}</p>
                      </div> <span class="date">20/07/2022</span>
                      <a href="{{ item.href }}" class="card-news__link"></a>
                    </div>
                  </div>
                {% endfor %}
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <h2 class="content-title">{{ title_otmetki }}</h2>
        <div class="content-description story">
          <p>{{ text_otmetki }}</p>
        </div>
        <div class="content-main__mobile-app">
          <div class="block-download-list">
            {% for app in download %}
              <a class="appstore" href="{{ app.link }}"><img loading="lazy" src="{{ base_url('public/filemanager/' ~ app.img) }}" alt="" /></a>
            {% endfor %}
          </div>
          <p class="content-title">{{ title_download }}</p>
          <div class="qr-download">
            <div class="photo">
              <img src="{{ base_url('public/filemanager/' ~ qr[0]) }}" alt="qr" />
            </div>
            <p class="qr-download__text">{{ text_download }}</p>
          </div>
        </div>
        <h2 class="content-title">{{ title_finance }}</h2>
        <div class="content-description story">
          <p>{{ text_finance }}</p>
        </div>
        {% for item in progress %}
          <div class="finance-progress">
            <div class="finance-progress__wrapper">
              <span class="finance-progress__sum">{{ item.value }} ({{ item.value * 100 / item.max }}%)</span>
              <progress class="finance-progress__bar" value="{{ item.value * 100 / item.max }}" max="100"></progress>
            </div>
            <span class="finance-progress__max">{{ item.max }}</span>
          </div>
        {% endfor %}
        <div class="content-main__support">
          <a href="#" class="content-main__support-link">Поддержать Pollen Club!</a>
          <a href="#" class="content-main__support-text">На что идут ваши пожертвования</a>
        </div>
      </div>
      <div class="content-main__map">
        <a href="{{ map_link }}" class="content-main__map-link">
          <p class="content-main__map-text">
            <span class="content-main__map-text__link">{{ map_text }}</span>
            <span class="content-main__map-text__icon"><img src="{{ base_url('public/images/pollen/icons/map-zoom.svg') }}" loading="lazy" alt="" /></span>
          </p>
          <span class="content-main__map-img"><img src="{{ base_url('public/filemanager/' ~ map_img) }}" loading="lazy" alt="map" /></span>
        </a>

        <div class="content__reklama content-main__reklama">
          {% if reklama_main %}
            {% for item in reklama_main %}
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
    </div>
  </div>
</sections>
