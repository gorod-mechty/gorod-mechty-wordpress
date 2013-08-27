<?php add_theme_support('post-thumbnails'); ?>

function my_theme_register_menus()
{
    register_nav_menu('submenu', 'submenu');
}
add_action( 'init', 'my_theme_register_menus');