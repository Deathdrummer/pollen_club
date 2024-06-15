<sections class="main-sections">
  <div class="main-block">
    <div class="content-main">
      <div class="content-main__content">
        <h1 class="content-title blue">Уровень пыльцы и самочувствия</h1>
        <div class="content-main__conten-main-section">
          <div class="content-description story">
            <p>Уровень аллергенной пыльцы и Индекс самочувствия. Расширенный обзор аллергенной обстановки и прогноз аллерго рисков доступны в мобильном приложении «Пыльца Club».</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-main__content-news">
          <h2 class="content-title">
            <a href="/gid-alergika/" class="content-main__news-all">
              <span class="news-all-text">Последние новости</span>
              <span class="news-all-icon" style=" mask-image: url({{ base_url('public/images/pollen/icons/arrow.svg') }})"></span>
            </a>
          </h2>
          <div class="news-gallery">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="card-news">
                    <div class="card-news__photo">
                      <img loading="lazy" src="{{ base_url('public/images/pollen/img/news.png') }}" alt="" role="group" />
                    </div>
                    <div class="card-news__content">
                      <h3 class="card-news__content-title">Злаки продолжают, полынь готовится</h3>
                      <p class="card-news__content-text">Аллергенная обстановка повсеместно нестабильная. Большинство аллергиков реагируют...</p>
                    </div> <span class="date">20/07/2022</span>
                    <a href="/news/" class="card-news__link"></a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card-news">
                    <div class="card-news__photo">
                      <img loading="lazy" src="{{ base_url('public/images/pollen/img/news.png') }}" alt="" role="group" />
                    </div>
                    <div class="card-news__content">
                      <h3 class="card-news__content-title">Злаки продолжают, полынь готовится</h3>
                      <p class="card-news__content-text">Аллергенная обстановка повсеместно нестабильная. Большинство аллергиков реагируют...</p>
                    </div> <span class="date">20/07/2022</span>
                    <a href="/news/" class="card-news__link"></a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card-news">
                    <div class="card-news__photo">
                      <img loading="lazy" src="{{ base_url('public/images/pollen/img/news.png') }}" alt="" role="group" />
                    </div>
                    <div class="card-news__content">
                      <h3 class="card-news__content-title">Злаки продолжают, полынь готовится</h3>
                      <p class="card-news__content-text">Аллергенная обстановка повсеместно нестабильная. Большинство аллергиков реагируют...</p>
                    </div> <span class="date">20/07/2022</span>
                    <a href="/news/" class="card-news__link"></a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card-news">
                    <div class="card-news__photo">
                      <img loading="lazy" src="{{ base_url('public/images/pollen/img/news.png') }}" alt="" role="group" />
                    </div>
                    <div class="card-news__content">
                      <h3 class="card-news__content-title">Злаки продолжают, полынь готовится</h3>
                      <p class="card-news__content-text">Аллергенная обстановка повсеместно нестабильная. Большинство аллергиков реагируют...</p>
                    </div> <span class="date">20/07/2022</span>
                    <a href="/news/" class="card-news__link"></a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card-news">
                    <div class="card-news__photo">
                      <img loading="lazy" src="{{ base_url('public/images/pollen/img/news.png') }}" alt="" role="group" />
                    </div>
                    <div class="card-news__content">
                      <h3 class="card-news__content-title">Злаки продолжают, полынь готовится</h3>
                      <p class="card-news__content-text">Аллергенная обстановка повсеместно нестабильная. Большинство аллергиков реагируют...</p>
                    </div> <span class="date">20/07/2022</span>
                    <a href="/news/" class="card-news__link"></a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card-news">
                    <div class="card-news__photo">
                      <img loading="lazy" src="{{ base_url('public/images/pollen/img/news.png') }}" alt="" role="group" />
                    </div>
                    <div class="card-news__content">
                      <h3 class="card-news__content-title">Злаки продолжают, полынь готовится</h3>
                      <p class="card-news__content-text">Аллергенная обстановка повсеместно нестабильная. Большинство аллергиков реагируют...</p>
                    </div> <span class="date">20/07/2022</span>
                    <a href="/news/" class="card-news__link"></a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card-news">
                    <div class="card-news__photo">
                      <img loading="lazy" src="{{ base_url('public/images/pollen/img/news.png') }}" alt="" role="group" />
                    </div>
                    <div class="card-news__content">
                      <h3 class="card-news__content-title">Злаки продолжают, полынь готовится</h3>
                      <p class="card-news__content-text">Аллергенная обстановка повсеместно нестабильная. Большинство аллергиков реагируют...</p>
                    </div> <span class="date">20/07/2022</span>
                    <a href="/news/" class="card-news__link"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <h2 class="content-title">Почему ваши отметки самочувствия важны</h2>
        <div class="content-description story">
          <p>В работе нашего сервиса используются данные, которые аллергики передают, оставляя отметки самочувствия в приложении «Пыльца Club». С каждой новой отметкой Карта аллергенной обстановки становится информативнее. Давайте поможем друг другу!</p>
        </div>
        <div class="content-main__mobile-app">
          <div class="block-download-list">
            <a class="appstore" href="#appstore"><img loading="lazy" src="{{ base_url('public/images/pollen/icons/appstore.svg') }}" alt="" /></a>
            <a class="appstore" href="#googleplay"><img loading="lazy" src="{{ base_url('public/images/pollen/icons/googleplay.svg') }}" alt="" /></a>
          </div>
          <p class="content-title">Ставьте отметки о&nbsp;самочувствии в&nbsp;приложении и&nbsp;пользуйтесь нашими прогнозами!</p>
          <div class="qr-download">
            <div class="photo">
              <img src="{{ base_url('public/images/pollen/qr.svg') }}" alt="qr" />
            </div>
            <p class="qr-download__text">Наведите камеру на QR-код, чтобы скачать</p>
          </div>
        </div>
        <h2 class="content-title">Станьте соучастником</h2>
        <div class="content-description story">
          <p>Мы&nbsp;служим сообществу аллергиков на&nbsp;совесть и&nbsp;с&nbsp;душой&nbsp;&mdash; это нельзя купить! Но&nbsp;можно купить&nbsp;то, без чего существование сервиса невозможно!</p>
        </div>
        <div class="finance-progress">
          <div class="finance-progress__wrapper">
            <span class="finance-progress__sum">20 000 (40%)</span>
            <progress class="finance-progress__bar" value="40" max="100"></progress>
          </div>
          <span class="finance-progress__max">50 000</span>
        </div>
        <div class="content-main__support">
          <a href="#" class="content-main__support-link">Поддержать Pollen Club!</a>
          <a href="#" class="content-main__support-text">На что идут ваши пожертвования</a>
        </div>
      </div>
      <div class="content-main__map">
        <a href="/map" class="content-main__map-link">
          <p class="content-main__map-text">
            <span class="content-main__map-text__link">Открыть карту на весь экран</span>
            <span class="content-main__map-text__icon"><img src="{{ base_url('public/images/pollen/icons/map-zoom.svg') }}" loading="lazy" alt="" /></span>
          </p>
          <span class="content-main__map-img"><img src="{{ base_url('public/images/pollen/map.png') }}" loading="lazy" alt="map" /></span>
        </a>
        <div class="content__reklama content-main__reklama">
          <div class="reklama-item">
            <div class="photo reklama-item__photo">
              <img src="{{ base_url('public/images/pollen/reklama.png') }}" loading="lazy" alt="" />
            </div>
            <div class="reklama-item__content">
              <h3 class="reklama-item__title">Безопасное средство от аллергии!</h3>
              <p class="reklama-item__text">Новейшая разработка российских ученых - средство против аллергии в мягких капсулах. Средство разработано на основе натуральных компонентов по новым технологиям.</p>
              <a href="#" class="reklama-item__link">Подробнее</a>
            </div>
          </div>
          <div class="reklama-item">
            <div class="photo reklama-item__photo">
              <img src="{{ base_url('public/images/pollen/reklama.png') }}" loading="lazy" alt="" />
            </div>
            <div class="reklama-item__content">
              <h3 class="reklama-item__title">Безопасное средство от аллергии!</h3>
              <p class="reklama-item__text">Новейшая разработка российских ученых - средство против аллергии в мягких капсулах. Средство разработано на основе натуральных компонентов по новым технологиям.</p>
              <a href="#" class="reklama-item__link">Подробнее</a>
            </div>
          </div> <div class="reklama-item">
            <div class="photo reklama-item__photo">
              <img src="{{ base_url('public/images/pollen/reklama.png') }}" loading="lazy" alt="" />
            </div>
            <div class="reklama-item__content">
              <h3 class="reklama-item__title">Безопасное средство от аллергии!</h3>
              <p class="reklama-item__text">Новейшая разработка российских ученых - средство против аллергии в мягких капсулах. Средство разработано на основе натуральных компонентов по новым технологиям.</p>
              <a href="#" class="reklama-item__link">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</sections>
