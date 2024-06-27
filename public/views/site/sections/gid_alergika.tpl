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
                  </div> <span class="date">20/07/2022</span>
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
        <li class="active">Все новости и статьи</li>
        <li>Практические рекоммендации</li>
        <li>Рекоммендации</li>
        <li>Практические рекоммендации</li>
        <li>Практические рекоммендации</li>
        <li>Практические рекоммендации</li>
        <li>Аллергенные растения</li>
      </ul>
    </div>
    <div class="content-alergika__cards-allergika">
      {% for item in gid_allergika.items %}
        <a href="{{ item.href }}" class="card-allergika">
          {% if item.attributes %}
            <div class="card-allergika__tags tags">
              <ul>
                {% for tag in item.attributes %}
                  <li class="{{ tag.name }}">{{ tag.value }}</li>
                {% endfor %}
              </ul>
            </div>
          {% endif %}
          <div class="card-allergika__photo">
            <img loading="lazy" src="{{ base_url('public/filemanager/' ~ item.main_image.file) }}" alt="{{ item.main_image.alt }}" role="group" />
          </div>
          <div class="card-allergika__content">
            <div class="card-allergika__content-title">{{ item.title }}</div>
            <div class="card-allergika__content-text">{{ item.short_desc }}</div>
          </div>
        </a>
      {% endfor %}
    </div>
  </div>
</section>
