<sections class="mobile-application">
  <div class="main-block">
    <div class="content-header">
      <div class="content-header__left">
        <h1 class="content-header__title title-gradient">{{ title_page }}</h1>
        <div class="story content-header__description">
          <p>{{ desc_page }}</p>
        </div>
      </div>
      <div class="content-header__right">
        <div class="block-download">
          <div class="block-download-list">
            {% for app in download %}
              <a class="appstore" href="{{ app.link }}"><img loading="lazy" src="{{ base_url('public/filemanager/' ~ app.img) }}" alt="" /></a>
            {% endfor %}
          </div>
          <div class="advantages-application">
            <div class="advantages-circle circle-1 bcg-green-bef">
              <span class="advantages-title">{{ title_circle_1 }}</span>
              <span class="advantages-description">{{ text_circle_1 }}</span>
            </div>
            <div class="advantages-circle circle-2 bcg-orange-bef">
              <span class="advantages-title">{{ title_circle_2 }}</span>
              <span class="advantages-description">{{ text_circle_2 }}</span>
            </div>
          </div>
          <span class="appstore-utp blue">{{ desc_app }}</span>
        </div>
      </div>
    </div>
    <div class="content-main">
      <div class="content-main__left">
        <div class="content-main__slider">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              {% for item in gallery %}
                <div class="swiper-slide">
                  <img loading="lazy" src="{{ base_url('public/filemanager/' ~ item.img) }}" alt="" role="group" />
                </div>
              {% endfor %}
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>

        <span class="content-title blue">{{title_desc_1}}</span>
        <div class="content-col-2">
          <div class="content-description">
            <p>{{text_desc_1}}<p>
          </div>
          <div class="content-description">
            <p>{{text_desc_2}}</p>
          </div>
        </div>
      </div>
      <div class="content-main__right">
        <span class="appstore-utp blue">{{ desc_app }}</span>
        {% for content in contents %}
              <div class="content">
                <span class="content-title {{content.class}}">{{content.title}}</span>
                <div class="content-col-2">
                  <div class="content-description">
                    <p>{{content.text_1}}</p>
                  </div>
                  <div class="content-description">
                    <p>{{content.text_2}}</p>
                  </div>
                </div>
              </div>
        {% endfor %}
      </div>
    </div>
  </div>
</sections>
