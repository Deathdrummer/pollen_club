<div class="content-donate">
  <form class="search">
    <input type="text" placeholder="Найти своё пожертвование" />
    <span class="search-close"></span>
    <div class="search-result"></div>
  </form>
  <h3 class="content-title section-title blue">Последние пожертвования:</h3>
  <div class="finance-last-wrapper">
    <div class="finance-last" id="donate">
      {% for donat in donate %}
        <span>{{ donat.name }}</span>
        <span class="finance-sum">{{ donat.price }} ₽</span>
        <span>{{ donat.date }}</span>
      {% endfor %}
    </div>
  </div>
</div>
