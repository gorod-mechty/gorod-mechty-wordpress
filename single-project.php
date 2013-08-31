<?php
/*
Template Name Posts: Single Project
*/
?>
<?php get_header(); ?>
    <div class="content">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <h1 class="heading heading_level_1"><?php the_title(); ?></h1>
        <div class="project-single">
        <div class="project-images clearfix">
            <img class="b-icon project-single__img-l" src="<?php the_field('left_img'); ?>" alt="img">
            <img class="b-icon project-single__img-r" src="<?php the_field('right_img'); ?>" alt="img">
        </div>
            <div class="project-cash">
                <pre class="project-cash__item"><span>Надо собрать:</span>    <?php the_field('need_sum'); ?> грн</pre>
                <pre class="project-cash__item"><a class="b-link" href="/">Собрано:</a>            8000 грн</pre>
                <pre class="project-cash__item"><a class="b-link" href="/">Потрачено:</a>        2500 грн</pre>
                <div class="project-cash__docs">
                    <a class="b-link b-link_style_italic" href="<?php the_field('doc'); ?>">Скачать</a> <span>документацию</span>
                </div>
            </div>
            <div class="project-date">
                <div class="project-date__caption">
                    Даты реализации:
                </div><?php the_field('date'); ?>
            </div>
            <div class="project-content">
                <?php
                the_content(__('(more...)'));
                wp_link_pages();
                edit_post_link(__('Edit This'));
                ?>
            </div>
        </div>
    <?php endwhile; else: ?>
        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
    <?php endif; ?>
        <?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>
    </div>
<?php get_footer(); ?>