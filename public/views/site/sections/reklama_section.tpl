{% set current_date = date('Y-m-d') %}

{% for item in reklama[4]|slice(0, 1) %}
  {% set date_min = item.date_min|date('Y-m-d') %}
  {% set date_max = item.date_max|date('Y-m-d') %}

  {% if current_date >= date_min and current_date <= date_max %}
    <div id="bannerModal" class="modal" data-time-start="" data-time-end="">
      <div class="modal-content">
        <a href="{{ item.href }}" target="_blank" class="banner-link">
          <input type="hidden" id="bannerModalMobile" value="{{ base_url('public/filemanager/' ~ item.img) }}" />
          <input type="hidden" id="bannerModalDesktop" value="{{ base_url('public/filemanager/' ~ item.img) }}" />
          <img id="bannerModalImage" class="modal__win" alt="   {{ item.title }}" />
        </a>
      </div>
    </div>
  {% endif %}
{% endfor %}
