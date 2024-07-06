<section class="section single single_news">
  <div class="wrapper-single">
    <form class="search">
      <input type="text" placeholder="Поиск" />
      <span class="search-close"></span>
      <div class="search-result"></div>
    </form>
    <div class="wrapper-single__content">
      <div class="date single_date">{{ product.article }}</div>
      <h1 class="content-title green">{{ product.title }}</h1>
      <div class="story">{{ product.description|raw }}</div>
      <div class="single-gallery-wrapper">
        <div class="single-gallery">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              {% for item in product.gallery %}
                <div class="swiper-slide">
                  <div class="photo">
                    <img loading="lazy" src="{{ base_url('public/filemanager/' ~ item.file) }}" alt="{{ item.alt }}" role="group" />
                  </div>
                </div>
              {% endfor %}
            </div>
          </div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  </div>
</section>
