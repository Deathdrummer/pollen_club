{% set current_date = date('Y-m-d') %}
{% for item in reklama[4]|slice(1) %}
  {% set date_min = item.date_min|date('Y-m-d') %}
  {% set date_max = item.date_max|date('Y-m-d') %}
  {% if current_date >= date_min and current_date <= date_max %}
    <div id="bannerModal" class="modal">
      <div class="modal-content">
        <a href="{{ item.href }}" target="_blank" class="banner-link">
          <input type="hidden" id="bannerModalMobile" value="{{ base_url('public/filemanager/' ~ item.img) }}" />
          <input type="hidden" id="bannerModalDesktop" value="{{ base_url('public/filemanager/' ~ item.img) }}" />
          <img id="bannerModalImage" class="modal__win" alt="" />
        </a>
      </div>
    </div>
  {% endif %}
{% endfor %}
