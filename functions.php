<?php add_theme_support('post-thumbnails'); ?>

<?php function register_my_menu() {
  register_nav_menu('about',__( 'about'));
  register_nav_menu('partners',__( 'partners'));
}
add_action( 'init', 'register_my_menu' );
?>