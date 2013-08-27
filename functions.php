<?php add_theme_support('post-thumbnails'); ?>

<?php function register_my_menu() {
  register_nav_menu('submenu',__( 'submenu'));
}
add_action( 'init', 'register_my_menu' );
?>