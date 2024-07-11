<section class="section gid_alergika">
  <div class="content-header">
    <h1 class="content-title blue">{{ title_page }}</h1>
    <form class="search">
      <input type="text" placeholder="Поиск" />
      <span class="search-close"></span>
      <div class="search-result"></div>
    </form>
  </div>
  <div class="content-news">
    <h2 class="content-title">{{ title_news }}</h2>
    <div class="story">{{ text_news|raw }}</div>

    <div class="news-gallery-wrapper">
      <div class="news-gallery">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            {% for item in news.items %}
              <div class="swiper-slide">
                <div class="card-news">
                  <div class="card-news__photo">
                    <img loading="lazy" src="{{ base_url('public/filemanager/' ~ item.main_image.file) }}" alt="{{ item.main_image.alt }}" role="group" />
                  </div>
                  <div class="card-news__content">
                    <h3 class="card-news__content-title">{{ item.title }}</h3>
                    <p class="card-news__content-text">{{ item.short_desc }}</p>
                  </div> <span class="date">{{ item.article }}</span>
                  <a href="{{ item.href }}" class="card-news__link"></a>
                </div>
              </div>
            {% endfor %}
          </div>
        </div>
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
  </div>
  <div class="content-alergika">
    <h2 class="content-title">{{ title_allergika }}</h2>
    <div class="story">{{ text_allergika|raw }}</div>
    <div class="tags tabs">
      <ul>
        <li class="active">Все статьи</li>
      </ul>
    </div>
    <div class="content-alergika__cards-allergika">
      {% set current_date = date('Y-m-d') %}
      {% for item in gid_allergika.items|reverse|randomaddinarray(reklama[3]) %}
        {% set date_min = item.date_min|date('Y-m-d') %}
        {% set date_max = item.date_max|date('Y-m-d') %}
        {% if current_date >= date_min and current_date <= date_max %}
          <a href="{{ item.href }}" class="card-allergika">
            <div class="card-allergika__tags tags">
              <ul>
                {% if item.hashtags %}
                  {% for tag in item.hashtags %}
                    <li style="color: {{ hashtags_list[tag][0]['color_text'] }}; background-color: {{ hashtags_list[tag][0]['color_bcg'] }}">{{ tag }}</li>
                  {% endfor %}
                {% elseif not item.main_image.file %}
                  <li class="bcg-light">Реклама</li>
                {% endif %}
              </ul>
            </div>

            <div class="card-allergika__photo">
              {% if item.img %}
                <img src="{{ base_url('public/filemanager/' ~ item.img) }}" loading="lazy" alt="{{ item.title }}" />
              {% else %}
                <img src="{{ base_url('public/filemanager/' ~ item.main_image.file) }}" loading="lazy" alt="{{ item.main_image.alt }}" />
              {% endif %}
            </div>
            <div class="card-allergika__content">
              <div class="card-allergika__content-title">{{ item.title }}</div>
              <div class="card-allergika__content-text">{{ item.short_desc ? : item.text }}</div>
            </div>
          </a>
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>
