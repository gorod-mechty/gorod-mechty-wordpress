<?php
/*
Template Name Posts: Single News
*/
?>
<?php get_header(); ?>
<?php } else if(is_post_type_archive('single-news')){ ?>
    <p>true</p>
<?php } ?>


    <div class="content">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <h1 class="heading heading_level_1"><?php the_title(); ?></h1>
        <div class="news-single">
            <div class="date"><?php the_time('j F'); ?></div>
            <?php
            the_content(__('(more...)'));
            wp_link_pages();
            edit_post_link(__('Edit This'));
            ?>
        </div>
    <?php endwhile; else: ?>
        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
    <?php endif; ?>
        <?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>
    </div>
<?php get_footer(); ?>