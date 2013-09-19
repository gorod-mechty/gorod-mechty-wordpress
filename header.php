<!DOCTYPE html>
<html class="i-ua_js_no i-ua_css_standard">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>
            Симферополь - Фонд Город мечты
        </title>
        <link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/favicon.ico">
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <script>
;(function(d,e,c,r){e=d.documentElement;c="className";r="replace";e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");if(d.compatMode!="CSS1Compat")e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")})(document);
        </script>
        <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>"><!--[if gte IE 7]><link rel="stylesheet" href="../merged/_merged.ie.css"/><![endif]-->
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=PT+Mono&amp;subset=latin,cyrillic-ext,latin-ext,cyrillic">
        <meta name="description" content="Благотворительный фонд «Город мечты» — проекты в области озеленения и благоустройства Симферополя, преобразования его архитектурного облика и повышения культурного уровня">
        <?php wp_head(); ?>
        <script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/script.js"></script>
    </head>
    <body class="b-page b-page__body b-page_page_main">
        <?php if ( is_front_page()) { ?>
            <div class="b-page__inner b-page__inner_state_main clearfix">
            <div class="logo"></div>
        <?php } else if ( is_category(2)|| in_category(7) || is_category(3) || is_category(4) || is_category(5)){ ?>
            <div class="b-page__inner clearfix">
            <a class="b-link logo" href="/"></a>
        <?php } else{ ?>
            <div class="b-page__inner clearfix">
            <?php include(TEMPLATEPATH . '/sidebar.php'); ?>
        <?php } ?>
            <ul class="nav">
                <?php if ( is_page(33)) { ?>
                    <li class="nav__item nav__item_state_current">О фонде</li>
                <?php } else{ ?>
                    <?php wp_list_pages("title_li=&include=33");?> 
                <?php } ?>
                <?php if ( is_category(2)) { ?>
                    <li class="nav__item nav__item_state_current">Проекты</li>
                <?php } else{ ?>
                    <?php wp_list_categories("title_li=&include=2");?> 
                <?php } ?>
                <?php if ( is_category(1)) { ?>
                    <li class="nav__item nav__item_state_current">Новости</li>
                <?php } else{ ?>
                    <?php wp_list_categories("title_li=&include=1");?> 
                <?php } ?>
                <?php if ( is_category(6)) { ?>
                    <li class="nav__item nav__item_state_current">Сотрудничество</li>
                <?php } else{ ?>
                    <?php wp_list_categories("title_li=&include=6");?>
                <?php } ?>
                <?php if (false): ?>
                    <?php if ( is_category(7)) { ?>
                          <!-- <li class="nav__item nav__item_state_current hidden">Деньги</li> -->
                    <?php } else{ ?>
                          <?php wp_list_categories("title_li=&include=7");?> 
                <?php endif; ?>
                
                <?php } ?>
            </ul>