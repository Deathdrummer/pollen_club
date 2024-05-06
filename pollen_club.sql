-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 06 2024 г., 09:38
-- Версия сервера: 8.0.30
-- Версия PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `pollen_club`
--

-- --------------------------------------------------------

--
-- Структура таблицы `catalogs`
--

CREATE TABLE `catalogs` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `item_variable` varchar(100) DEFAULT NULL,
  `page` varchar(100) DEFAULT NULL,
  `fields` json DEFAULT NULL,
  `vars` json DEFAULT NULL,
  `simular_products_category` int DEFAULT NULL,
  `simular_products_options` int DEFAULT NULL,
  `simular_products_tags` int DEFAULT NULL,
  `sort` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `catalogs`
--

INSERT INTO `catalogs` (`id`, `title`, `item_variable`, `page`, `fields`, `vars`, `simular_products_category`, `simular_products_options`, `simular_products_tags`, `sort`) VALUES
(6, 'Новости', 'product', '40', '{\"color\": null, \"files\": null, \"icons\": null, \"label\": 1, \"model\": null, \"price\": null, \"threed\": null, \"videos\": null, \"article\": null, \"gallery\": 1, \"options\": null, \"hashtags\": 1, \"price_old\": null, \"attributes\": null, \"categories\": null, \"main_image\": 1, \"short_desc\": 1, \"description\": 1, \"price_label\": null}', NULL, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `catalog_id` int NOT NULL DEFAULT '0',
  `parent_id` int DEFAULT '0',
  `title` varchar(100) DEFAULT NULL,
  `seo_title` varchar(255) DEFAULT NULL,
  `seo_text` text,
  `link_title` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `seo_url` varchar(100) DEFAULT NULL,
  `meta_keywords` text,
  `meta_description` text,
  `navigation` int DEFAULT '0',
  `page_id` int DEFAULT NULL,
  `items_variable` varchar(100) DEFAULT NULL,
  `subcategories_variable` varchar(100) DEFAULT NULL,
  `sort` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `lists`
--

CREATE TABLE `lists` (
  `id` int NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `fields` text,
  `regroup` text,
  `list_in_list` json DEFAULT NULL,
  `sort` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `lists`
--

INSERT INTO `lists` (`id`, `title`, `fields`, `regroup`, `list_in_list`, `sort`) VALUES
(48, 'test', 'text;text;названиеп;;;\ndate;date;Дата;;;', NULL, NULL, 0),
(49, 'page-data', 'text;page_url;Url страницы;;;\nfile;icon;Иконка меню;;;', 'page_url', NULL, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `lists_items`
--

CREATE TABLE `lists_items` (
  `id` int NOT NULL,
  `list_id` int NOT NULL DEFAULT '0',
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `--sort` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `lists_items`
--

INSERT INTO `lists_items` (`id`, `list_id`, `data`, `--sort`) VALUES
(376, 49, '{\"page_url\":\"mobile_app\",\"icon\":null}', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `options`
--

CREATE TABLE `options` (
  `id` int NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `color` varchar(10) DEFAULT NULL,
  `sort` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE `pages` (
  `id` int NOT NULL,
  `page_title` varchar(255) DEFAULT NULL,
  `icon` varchar(100) DEFAULT NULL,
  `seo_url` varchar(255) DEFAULT NULL,
  `link_title` varchar(100) DEFAULT NULL,
  `header` int DEFAULT '0',
  `footer` int DEFAULT '0',
  `nav_mobile` int DEFAULT '0',
  `navigation` int DEFAULT '0',
  `meta_keywords` text,
  `meta_description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `page_title`, `icon`, `seo_url`, `link_title`, `header`, `footer`, `nav_mobile`, `navigation`, `meta_keywords`, `meta_description`) VALUES
(31, 'Главная', NULL, 'index', 'Главная страница', 1, 1, 1, NULL, NULL, NULL),
(32, 'Мобильное приложение Пыльца Club', '&I&k&o&n&k&i/Mobile-icon.svg', 'mobile_app', 'Мобильное приложение', 1, 1, 1, 1, NULL, NULL),
(33, 'О проекте', '&I&k&o&n&k&i/About-icon.svg', 'about', 'О проекте', 1, 1, 1, 1, NULL, NULL),
(34, 'Контакты', '&I&k&o&n&k&i/Contact-icon.svg', 'contacts', 'Контакты', 1, 1, 1, 1, NULL, NULL),
(35, 'Поддержать проект', '&I&k&o&n&k&i/Support-icon.svg', 'support-project', 'Поддержать проект', 1, 1, 1, 1, NULL, NULL),
(38, 'Article', NULL, 'article', NULL, 1, 1, 1, NULL, NULL, NULL),
(40, 'News', NULL, 'news', NULL, 1, 1, 1, NULL, NULL, NULL),
(41, 'Гид аллергика', '&I&k&o&n&k&i/Gid-icon.svg', 'gid-alergika', 'Гид аллергика', 1, 1, 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `pages_sections`
--

CREATE TABLE `pages_sections` (
  `id` int NOT NULL,
  `page_id` int DEFAULT NULL,
  `section_id` int DEFAULT NULL,
  `navigation` int DEFAULT '0',
  `navigation_title` varchar(100) DEFAULT NULL,
  `showsection` int NOT NULL DEFAULT '1',
  `sort` int DEFAULT '0',
  `settings` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='привязка секций к старницам';

--
-- Дамп данных таблицы `pages_sections`
--

INSERT INTO `pages_sections` (`id`, `page_id`, `section_id`, `navigation`, `navigation_title`, `showsection`, `sort`, `settings`) VALUES
(143, 31, 66, 0, NULL, 1, 1, NULL),
(147, 32, 68, 0, NULL, 1, 2, NULL),
(148, 33, 69, 0, NULL, 1, 1, NULL),
(149, 34, 70, 0, NULL, 1, 1, NULL),
(150, 35, 71, 0, NULL, 1, 1, NULL),
(153, 38, 75, 0, NULL, 1, 1, NULL),
(155, 40, 74, 0, NULL, 1, 1, NULL),
(156, 41, 76, 0, NULL, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `patterns`
--

CREATE TABLE `patterns` (
  `id` int NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `filename` varchar(100) DEFAULT NULL,
  `settings` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `catalog_id` int DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `seo_url` varchar(100) DEFAULT NULL,
  `link_title` varchar(100) DEFAULT NULL,
  `meta_keywords` text,
  `meta_description` text,
  `article` varchar(50) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `main_image` varchar(255) DEFAULT NULL,
  `threed` varchar(255) DEFAULT NULL,
  `gallery` json DEFAULT NULL,
  `videos` json DEFAULT NULL,
  `short_desc` text,
  `description` text,
  `price` int DEFAULT NULL,
  `price_old` int DEFAULT NULL,
  `price_label` int NOT NULL,
  `attributes` json DEFAULT NULL,
  `label` int DEFAULT NULL,
  `option_title` varchar(100) DEFAULT NULL,
  `option_color` varchar(10) DEFAULT NULL,
  `option_icon` varchar(255) DEFAULT NULL,
  `files` json DEFAULT NULL,
  `hashtags` json DEFAULT NULL,
  `icons` json DEFAULT NULL,
  `sort` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Товары';

-- --------------------------------------------------------

--
-- Структура таблицы `products_icons`
--

CREATE TABLE `products_icons` (
  `id` int NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `sort` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Структура таблицы `products_options`
--

CREATE TABLE `products_options` (
  `id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `product_option_id` int DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `icon` varchar(500) DEFAULT NULL,
  `color` varchar(10) DEFAULT NULL,
  `sort` int DEFAULT '0',
  `position` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `products_options`
--

INSERT INTO `products_options` (`id`, `product_id`, `product_option_id`, `title`, `icon`, `color`, `sort`, `position`) VALUES
(1, 58, 85, 'оранжевый', NULL, '#e08b29', 1, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `products_reviews`
--

CREATE TABLE `products_reviews` (
  `id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `from` varchar(100) DEFAULT NULL,
  `images` json DEFAULT NULL,
  `text` text,
  `rating` int DEFAULT NULL,
  `date` int DEFAULT NULL,
  `published` int UNSIGNED DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Отзывы о товарах';

-- --------------------------------------------------------

--
-- Структура таблицы `products_to_categories`
--

CREATE TABLE `products_to_categories` (
  `id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='категории к товарам';

-- --------------------------------------------------------

--
-- Структура таблицы `promo`
--

CREATE TABLE `promo` (
  `id` int NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `date_add` int DEFAULT NULL,
  `date_used` int DEFAULT NULL,
  `code` varchar(50) DEFAULT NULL,
  `stat` int DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `sections`
--

CREATE TABLE `sections` (
  `id` int NOT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `fields` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='fields - это поле, в которое заносятся поля, которые будут генерироваться в "настройках контенты"';

--
-- Дамп данных таблицы `sections`
--

INSERT INTO `sections` (`id`, `filename`, `title`, `fields`) VALUES
(66, 'main_sections', 'Главная страница', '[{\"type\":\"text\",\"variable\":\"title_page\",\"label\":\"\\u0417\\u0430\\u0433\\u043e\\u043b\\u043e\\u0432\\u043e\\u043a \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u044b\",\"mask\":null,\"rules\":null},{\"type\":\"textarea\",\"variable\":\"desc_page\",\"label\":\"\\u041e\\u043f\\u0438\\u0441\\u0430\\u043d\\u0438\\u0435\",\"editor\":1,\"meditor\":1,\"rules\":null}]'),
(68, 'mobile_app', 'Мобильное приложение Пыльца Club', '[{\"type\":\"text\",\"variable\":\"title_page\",\"label\":\"\\u0417\\u0430\\u0433\\u043e\\u043b\\u043e\\u0432\\u043e\\u043a \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u044b\",\"mask\":null,\"rules\":null},{\"type\":\"textarea\",\"variable\":\"desc_page\",\"label\":\"\\u041e\\u043f\\u0438\\u0441\\u0430\\u043d\\u0438\\u0435 \\u0441\\u0442\\u0440\\u0430\\u043d\\u0438\\u0446\\u044b\",\"editor\":1,\"meditor\":1,\"rules\":null}]'),
(69, 'about', 'О проекте', NULL),
(70, 'contacts', 'Контакты', NULL),
(71, 'support_project', 'Поддержать проект', NULL),
(74, 'single_news', 'News', NULL),
(75, 'single_article', 'Article', NULL),
(76, 'gid_alergika', 'Гид аллергика', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `settings`
--

CREATE TABLE `settings` (
  `id` int NOT NULL,
  `param` varchar(255) DEFAULT NULL,
  `value` longtext,
  `json` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `settings`
--

INSERT INTO `settings` (`id`, `param`, `value`, `json`) VALUES
(2, 'setting_logo', '{\"file\":\"&I&k&o&n&k&i\\/logo.svg\",\"alt\":null}', 1),
(4, 'setting_favicon', '&I&k&o&n&k&i/favicon.png', 0),
(5, 'setting_phone', '{\"mobile\":null}', 1),
(6, 'setting_email', '{\"from\":null,\"to\":null,\"subject\":\"\\u0417\\u0430\\u0433\\u043e\\u043b\\u043e\\u0432\\u043e\\u043a \\u043f\\u0438\\u0441\\u044c\\u043c\\u0430\",\"from_name\":\"\\u041e\\u0442\\u043f\\u0440\\u0430\\u0432\\u0438\\u0442\\u0435\\u043b\\u044c\",\"contact\":null}', 1),
(7, 'setting_smtp', '{\"host\":null,\"user\":null,\"pass\":null,\"port\":null,\"crypto\":null}', 1),
(9, 'setting_metatags', '', 0),
(10, 'setting_scripts', '', 0),
(11, 'setting_scripts_head', '', 0),
(12, 'setting_setvarstocats', 'null', 1),
(13, 'setting_setvarstocatalogs', 'null', 1),
(49, 'setting_scrolltop', '#scrolltop', 0),
(59, 'setting_strict_filters', '{\"tags\":null,\"icons\":null}', 1),
(94, 'setting_og', '{\"image\":null,\"title\":null,\"url\":null,\"site_name\":null,\"description\":null}', 1),
(125, 'setting_page_vars', '{\"31\":null,\"32\":null,\"33\":null,\"34\":null,\"35\":null,\"38\":null,\"40\":null,\"41\":null}', 1),
(159, 'token', 'bmlraXRha2FsaW5raW4xOTk3QGdtYWlsLmNvbXx8MTIzMTIz', 0),
(160, 'page31_main_sections143', '{\"title_page\":\"\\u041c\\u043e\\u0431\\u0438\\u043b\\u044c\\u043d\\u043e\\u0435 \\u043f\\u0440\\u0438\\u043b\\u043e\\u0436\\u0435\\u043d\\u0438\\u0435 \\u041f\\u044b\\u043b\\u044c\\u0446\\u0430 Club\",\"desc_page\":\"\\u042d\\u0442\\u043e \\u043d\\u0435 \\u043f\\u0440\\u043e\\u0441\\u0442\\u043e \\u0438\\u043d\\u0444\\u043e\\u0440\\u043c\\u0430\\u0446\\u0438\\u043e\\u043d\\u043d\\u0430\\u044f \\u043f\\u043b\\u043e\\u0449\\u0430\\u0434\\u043a\\u0430, \\u044d\\u0442\\u043e \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u0437\\u043c \\u0432\\u0437\\u0430\\u0438\\u043c\\u043e\\u0434\\u0435\\u0439\\u0441\\u0442\\u0432\\u0438\\u044f \\u0432\\u043d\\u0443\\u0442\\u0440\\u0438 \\u0441\\u043e\\u043e\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0430 \\u0430\\u043b\\u043b\\u0435\\u0440\\u0433\\u0438\\u043a\\u043e\\u0432, \\u0432\\u0438\\u0440\\u0442\\u0443\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043a\\u043b\\u0443\\u0431 \\u0437\\u0434\\u043e\\u0440\\u043e\\u0432\\u044c\\u044f \\u0431\\u043b\\u0438\\u0437\\u043a\\u0438\\u0445 \\u043f\\u043e \\u0434\\u0443\\u0445\\u0443 \\u043f\\u043e\\u043b\\u044c\\u0437\\u043e\\u0432\\u0430\\u0442\\u0435\\u043b\\u0435\\u0439. \\u0421\\u0435\\u0440\\u0432\\u0438\\u0441 \\u0442\\u0435\\u0441\\u043d\\u043e \\u0438\\u043d\\u0442\\u0435\\u0433\\u0440\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d \\u0441 \\u0441\\u0430\\u0439\\u0442\\u043e\\u043c \\u0438 \\u0441\\u043e\\u0446\\u0438\\u0430\\u043b\\u044c\\u043d\\u044b\\u043c\\u0438 \\u0441\\u0435\\u0442\\u044f\\u043c\\u0438, \\u0433\\u0434\\u0435 \\u043a\\u0430\\u0436\\u0434\\u044b\\u0439 \\u043d\\u0430\\u0439\\u0434\\u0435\\u0442 \\u0430\\u043a\\u0442\\u0438\\u0432\\u043d\\u043e\\u0441\\u0442\\u0438 \\u043f\\u043e \\u0441\\u0432\\u043e\\u0438\\u043c \\u0438\\u043d\\u0442\\u0435\\u0440\\u0435\\u0441\\u0430\\u043c.\\r\\n                \"}', 1),
(161, 'page32_mobile_app147', '{\"title_page\":\"\\u041c\\u043e\\u0431\\u0438\\u043b\\u044c\\u043d\\u043e\\u0435 \\u043f\\u0440\\u0438\\u043b\\u043e\\u0436\\u0435\\u043d\\u0438\\u0435 \\u041f\\u044b\\u043b\\u044c\\u0446\\u0430 Club\",\"desc_page\":\"\\u042d\\u0442\\u043e \\u043d\\u0435 \\u043f\\u0440\\u043e\\u0441\\u0442\\u043e \\u0438\\u043d\\u0444\\u043e\\u0440\\u043c\\u0430\\u0446\\u0438\\u043e\\u043d\\u043d\\u0430\\u044f \\u043f\\u043b\\u043e\\u0449\\u0430\\u0434\\u043a\\u0430, \\u044d\\u0442\\u043e \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u0437\\u043c \\u0432\\u0437\\u0430\\u0438\\u043c\\u043e\\u0434\\u0435\\u0439\\u0441\\u0442\\u0432\\u0438\\u044f \\u0432\\u043d\\u0443\\u0442\\u0440\\u0438 \\u0441\\u043e\\u043e\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0430 \\u0430\\u043b\\u043b\\u0435\\u0440\\u0433\\u0438\\u043a\\u043e\\u0432, \\u0432\\u0438\\u0440\\u0442\\u0443\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043a\\u043b\\u0443\\u0431 \\u0437\\u0434\\u043e\\u0440\\u043e\\u0432\\u044c\\u044f \\u0431\\u043b\\u0438\\u0437\\u043a\\u0438\\u0445 \\u043f\\u043e \\u0434\\u0443\\u0445\\u0443 \\u043f\\u043e\\u043b\\u044c\\u0437\\u043e\\u0432\\u0430\\u0442\\u0435\\u043b\\u0435\\u0439. \\u0421\\u0435\\u0440\\u0432\\u0438\\u0441 \\u0442\\u0435\\u0441\\u043d\\u043e \\u0438\\u043d\\u0442\\u0435\\u0433\\u0440\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d \\u0441 \\u0441\\u0430\\u0439\\u0442\\u043e\\u043c \\u0438 \\u0441\\u043e\\u0446\\u0438\\u0430\\u043b\\u044c\\u043d\\u044b\\u043c\\u0438 \\u0441\\u0435\\u0442\\u044f\\u043c\\u0438, \\u0433\\u0434\\u0435 \\u043a\\u0430\\u0436\\u0434\\u044b\\u0439 \\u043d\\u0430\\u0439\\u0434\\u0435\\u0442 \\u0430\\u043a\\u0442\\u0438\\u0432\\u043d\\u043e\\u0441\\u0442\\u0438 \\u043f\\u043e \\u0441\\u0432\\u043e\\u0438\\u043c \\u0438\\u043d\\u0442\\u0435\\u0440\\u0435\\u0441\\u0430\\u043c.\"}', 1),
(162, 'setting_scripts_end', '', 0),
(163, 'setting_styles_head', '', 0),
(164, 'setting_tinypng_api_key', 'QWVgyy5gXWG951pDgfp4F5fQr9jWfvfc', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `catalogs`
--
ALTER TABLE `catalogs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `lists_items`
--
ALTER TABLE `lists_items`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `pages_sections`
--
ALTER TABLE `pages_sections`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `patterns`
--
ALTER TABLE `patterns`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products_icons`
--
ALTER TABLE `products_icons`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Индексы таблицы `products_options`
--
ALTER TABLE `products_options`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `products_reviews`
--
ALTER TABLE `products_reviews`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Индексы таблицы `products_to_categories`
--
ALTER TABLE `products_to_categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `promo`
--
ALTER TABLE `promo`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `catalogs`
--
ALTER TABLE `catalogs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT для таблицы `lists_items`
--
ALTER TABLE `lists_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=377;

--
-- AUTO_INCREMENT для таблицы `options`
--
ALTER TABLE `options`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT для таблицы `pages_sections`
--
ALTER TABLE `pages_sections`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;

--
-- AUTO_INCREMENT для таблицы `patterns`
--
ALTER TABLE `patterns`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT для таблицы `products_icons`
--
ALTER TABLE `products_icons`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT для таблицы `products_options`
--
ALTER TABLE `products_options`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `products_reviews`
--
ALTER TABLE `products_reviews`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `products_to_categories`
--
ALTER TABLE `products_to_categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `promo`
--
ALTER TABLE `promo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT для таблицы `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
