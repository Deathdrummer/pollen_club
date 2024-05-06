<aside class="aside" id="aside">
  <div class="aside-block">
    <div class="aside-block__top">
      {% if seo_url == 'index' %}
        <div class="logo" style="background-image: url('{{ base_url('public/filemanager/' ~ logo.file) }}')"></div>
      {% else %}
        <a href="/" class="logo" style="background-image: url('{{ base_url('public/filemanager/' ~ logo.file) }}')"></a>
      {% endif %}

      <div class="menu-btn">
        <i class="grad-icon" style="mask-image: url('public/images/polen/img/charm_menu-hamburger.svg')"></i>
      </div>
    </div>
    <div class="aside-block__bottom">
      <div class="aside-block__bottom-top">
        <nav class="menu-nav">
          <ul class="menu-list menu-aside">
            {% for item in navigation.pages %}
              <li>
                <a class="menu-link menu-link-icon{% if item.active %}{{ ' active' }}{% endif %}" href="{{ item.href }}">
                  <i class="grad-icon" style="mask-image: url('{{ base_url('public/filemanager/' ~ item.icon) }}')"></i>
                  <span>{{ item.link_title }}</span>
                </a>
              </li>
            {% endfor %}
          </ul>
        </nav>
      </div>
      <div class="aside-block__bottom-bottom">
        <a class="menu-link policy" href="#"><span>Политика конфиденциальности</span></a>
        <div class="social-links">
          <a class="social-link" href="#"><i class="grad-icon" style="mask-image: url('public/images/polen/img/youtube.svg');"></i></a>
          <a class="social-link" href="#"><i class="grad-icon" style="mask-image: url('public/images/polen/img/vk.svg');"></i></a>
        </div>
        <a class="menu-link mail" href="mailto:feedback@pollen.club"><span>Связаться с нами: feedback@pollen.club</span></a>
      </div>
      <div class="close-button">
        <i></i>
      </div>
    </div>
  </div>
</aside>
