<section class="section about">
  <div class="content-header">
    <div class="content-header__left">
      <h1 class="content-header__title title-gradient">{{ title_page }}</h1>
      <div class="story content-header__description">
        <p>{{ desc_page }}</p>
      </div>
    </div>
    <div class="content-header__right">
      <div class="block-download">
        <div class="advantages-application">
          <div class="advantages-circle circle-1 bcg-orange-bef">
            <span class="advantages-title">{{ title_circle_1 }}</span>
            <p class="advantages-description">{{ text_circle_1 }}</p>
          </div>
          <div class="advantages-circle circle-2 bcg-green-bef">
            <span class="advantages-title">{{ title_circle_2 }}</span>
            <p class="advantages-description">{{ text_circle_1 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="about-description">
    <div class="content-description story">{{ content_1|raw }}</div>
    <div class="content-description story">{{ content_2|raw }}</div>
    <div class="content-description story">{{ content_3|raw }}</div>
    <div class="content-description story">{{ content_4|raw }}</div>
  </div>
  <div class="content-main">
    <div class="content-main__left">
      <div class="mobile-about-video">
        <div class="video-player">
          <video class="video-player__video" muted autoplay playsinline src="{{ base_url('public/filemanager/' ~ video[0]) }}"></video>
          <div class="video-player__controls">
            <div class="video-player__controls-info">
              <div class="video-player__controls-buttons">
                <button class="controls-button controls-buttons__play play" class="play" title="play" accesskey="P"></button>
              </div>
              <div class="video-player__controls-volume">
                <button class="controls-button controls-volume__mute mute" title="mute">Mute</button>
                <div class="controls-volume__range-wrapper">
                  <input type="range" class="controls-volume__range" title="volume" min="0" max="1" step="0.1" value="1" />
                </div>
              </div>
            </div>

            <progress class="video-player__controls-progress" min="0" max="100" value="0">0% played</progress>
          </div>
        </div>
      </div>
    </div>
    <div class="content-main__right">
      <div class="content">
        <div class="content-vertical">
          <span class="content-title blue vertical">{{ title_content_1 }}</span>
          <div class="content-col-2">
            <div class="content-description story">{{ text_content_1|raw }}</div>
            <div class="content-description story">{{ text_content_1_2|raw }}</div>
          </div>
        </div>
      </div>
      <div class="advantages-about">
        <div class="advantages-circle circle-1 bcg-grad-bef">
          <span class="advantages-title">{{ title_circle_3 }}</span>
          <p class="advantages-description">{{ text_circle_3 }}</p>
        </div>
        <div class="content-description gradient-text">
          <p>{{ text_desc_circle }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="content-about">
    <div class="content-about__comands">
      <div class="content">
        <div class="content-vertical">
          <span class="content-title green vertical">{{ title_content_2 }}</span>
          <div class="content-col-2">
            <div class="content-description story">{{ text_content_2|raw }}</div>
            <div class="content-description story">{{ text_content_2_2|raw }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-about__experts">
      <h3 class="content-title section-title orange content-about__experts-title">{{ experts_title }}</h3>
      <div class="experts">
        {% for item in experts_list %}
          <div class="experts-item">
            <div class="experts-photo">
              <img loading="lazy" src="{{ base_url('public/filemanager/' ~ item.img) }}" alt="" />
            </div>
            <div class="experts-content">
              <p class="experts-title">{{ item.title }}</p>
              <p class="experts-text">{{ item.text }}</p>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
    <div class="achievements">
      <h3 class="content-title section-title blue achievements-title">{{ achievements_title }}</h3>

      <div class="achievements-list-wrapper">
        <div class="achievements-list">
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
