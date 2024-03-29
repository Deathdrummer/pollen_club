<h3 class="text-center">Секция: {{section_title}}</h3>
<form id="sectionForm">
	<table class="fieldset">
		<tr>
			<td class="w-20"><div><span>Название секции</span></div></td>
			<td>
				<div class="field">
					<input type="text" name="title" rules="empty|length:3,100" value="{{title}}" autocomplete="off" readonly placeholder="от 3 до 100 символов">
				</div>
				<input type="hidden" name="filename" value="{{filename}}">
			</td>
		</tr>
		{% if not filename %}
			<tr>
				<td class="w-20"><div><span>Название файла</span></div></td>
				<td>
					<div class="field">
						<input type="text" name="filename" rules="empty|length:3,50|reg:^[a-z_]+$,i:Ошибка! Название может содержать только латинские символы!" autocomplete="off" readonly placeholder="от 3 до 50 символов a-z и _">
					</div>
				</td>
			</tr>
		{% endif %}
		<tr>
			<td colspan="2" class="text-left">
				<p class="mb-10px">Поля:</p>
				<table>
					<thead>
						<tr>
							<td class="w-12">Тип</td>
							<td class="w-20">Переменная</td>
							<td class="w-20">Лейбл</td>
							<td>Настройки и данные</td>
							<td class="nowidth">Опции</td>
						</tr>
					</thead>
					<tbody id="sectionFields">
						{% if fields %}
							{% for field in fields %}
								{% include 'views/admin/render/sections/field.tpl' with field %}
							{% endfor %}
						{% else %}
							<tr class="empty">
								<td colspan="6"><p class="empty center">Нет данных</p></td>
							</tr>
						{% endif %}
					</tbody>
				</table>
				<div class="mt-20px">
					<span class="mr-6px">Добавить поле</span>
					<div class="select nowidth">
						<select id="newsectionfield">
							<option value="" selected disabled>Выбрать</option>
							<optgroup label="Однострочное поле">
								<option value="text">Текст</option>
								<option value="number">Цифры</option>
								<option value="tel">Телефон</option>
								<option value="email">E-mail</option>
								<option value="password">Пароль</option>
							</optgroup>
							<option value="textarea">Многострочное поле</option>
							<optgroup label="Множественный выбор">
								<option value="select">Выпадающий список</option>
								<option value="checkbox">Чекбокс</option>
								<option value="radio">Радио</option>
							</optgroup>
							<option value="file">Файл</option>
							<option value="list">Список</option>
							<optgroup label="Готовые данные">
								<option value="catalog">Каталог</option>
								<option value="categories">Категории</option>
								<option value="pages">Страница</option>
								<option value="hashtags">Хэштеги</option>
								<option value="options">Опции</option>
								<option value="icons">Значки</option>
							</optgroup>
						</select>
					</div>
				</div>
			</td>
		</tr>
	</table>
</form>