<aside class="aside" id="aside">
  <div class="aside-block">
    <div class="aside-block__top">
      {% if seo_url == 'index' %}
        <div class="logo"></div>
      {% else %}
        <a href="/" class="logo"></a>
      {% endif %}

      <div class="menu-btn">
        <i class="grad-icon" style="mask-image: url('public/images/polen/img/charm_menu-hamburger.svg');"></i>
      </div>
    </div>
    <div class="aside-block__bottom">
      <div class="aside-block__bottom-top">
        <nav class="menu-nav">
          <ul class="menu-list menu-aside">
            {# {% for item in navigation.pages %}
              <li>
                <a class="menu-link menu-link-icon{% if item.url %}{% endif %}" href="#gid">
                  <i class="grad-icon" style="mask-image: url('{{ item.icon }}');"></i>
                  <span>{{ item.title }}</span>
                </a>
              </li>
            {% endfor %} #}
            <li>
              <a class="menu-link menu-link-icon" href="#gid">
                <i class="grad-icon" style="mask-image: url('public/images/polen/img/Gid-icon.svg');"></i>
                <span>Гит аллергика</span>
              </a>
            </li>
            <li>
              <a class="menu-link menu-link-icon" href="#mobile"><i class="grad-icon" style="mask-image: url('public/images/polen/img/Mobile-icon.svg');"></i> <span>Мобильное приложение</span></a>
            </li>
            <li>
              <a class="menu-link menu-link-icon" href="#about"><i class="grad-icon" style="mask-image: url('public/images/polen/img/About-icon.svg');"></i> <span>О&nbsp;проекте</span></a>
            </li>
            <li>
              <a class="menu-link menu-link-icon" href="#contact"><i class="grad-icon" style="mask-image: url('public/images/polen/img/Contact-icon.svg');"></i> <span>Контакты</span></a>
            </li>
            <li>
              <a class="menu-link menu-link-icon" href="#support"><i class="grad-icon" style="mask-image: url('public/images/polen/img/Support-icon.svg');"></i> <span>Поддержать проект</span></a>
            </li>
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
