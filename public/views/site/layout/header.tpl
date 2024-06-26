<aside class="aside" id="aside">
  <div class="aside-block">
    <div class="aside-block__top">
      {% if seo_url == 'index' %}
        <div class="logo">
          <img class="logo-img" src="{{ base_url('public/filemanager/' ~ logo.file) }}" alt="Пыльца CLUB" />
          <span class="logo-text gradient-text">Пыльца CLUB</span>
        </div>
      {% else %}
        <a href="/" class="logo">
          <img class="logo-img" src="{{ base_url('public/filemanager/' ~ logo.file) }}" alt="Пыльца CLUB" />
          <span class="logo-text gradient-text">Пыльца CLUB</span>
        </a>
      {% endif %}

      <div class="menu-btn">
        <i class="grad-icon" style="mask-image: url('public/images/pollen/icons/charm_menu-hamburger.svg')"></i>
      </div>
    </div>
    <div class="aside-block__bottom">
      <div class="aside-block__bottom-wrapper">
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
          <div class="social-links">
            {% for item in soc %}
              <a class="social-link" href="{{ item.link }}"><i class="grad-icon" style="mask-image:  url('{{ base_url('public/filemanager/' ~ item.icon) }}');"></i></a>
            {% endfor %}
          </div>
          <a class="menu-link policy" href="#"><span>Политика конфиденциальности</span></a>
          <a class="menu-link mail" href="mailto:feedback@pollen.club"><span>Связаться с нами: feedback@pollen.club</span></a>
        </div>
        <div class="close-button menu-btn">
          <i></i>
        </div>
      </div>
    </div>
  </div>
</aside>
