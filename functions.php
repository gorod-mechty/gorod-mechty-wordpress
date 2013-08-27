<?php add_theme_support('post-thumbnails'); ?>
function add_munus()
{
    register_nav_menu('submenu',__( 'submenu' ));
}
add_action( 'init', 'add_menus');