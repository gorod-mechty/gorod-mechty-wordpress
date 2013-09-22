<?php
/*
Template Name Posts: Single Project
*/
?>
<?php get_header(); ?>
    <div class="content">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <h1 class="heading heading_level_1"><?php the_title(); ?></h1>
        <div class="project-single clearfix">
            <div class="project-images clearfix ">
                <?php 
                $left_img = get_field('left_img');
                $right_img = get_field('right_img');
                $size = "thumbnail"; // (thumbnail, medium, large, full or custom size)
                $image_l = wp_get_attachment_image_src( $left_img, $size ); 
                $image_r = wp_get_attachment_image_src( $right_img, $size );
                ?>

                <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-l"
                <?php if (get_field('left_img')) { ?>
                    src="<?php echo $image_l[0]; ?>"
                <?php } else { ?>
                    src="<?php bloginfo('template_url'); ?>/img/img1.png"
                <?php } ?>/></a>
                <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-r"
                <?php if (get_field('right_img')) { ?>
                    src="<?php echo $image_r[0]; ?>"
                <?php } else { ?>
                    src="<?php bloginfo('template_url'); ?>/img/img1.png"
                <?php } ?>/></a>
            </div>
            <div class="project-cash">
                <?php if (in_category(4) && get_field('need_sum') !=  0 ){ ?>
                    <pre class="project-cash__item"><span>Надо собрать:</span>    <?php the_field('need_sum'); ?> грн</pre> 
                <?php } ?>
                <pre class="project-cash__item hidden"><a class="b-link" href="<?php echo site_url(); ?>/?cat=7">Собрано:</a>            8000 грн</pre>
                <pre class="project-cash__item hidden"><a class="b-link" href="<?php echo site_url(); ?>/?cat=7">Потрачено:</a>        2500 грн</pre>
                <?php if (get_field('doc')){ ?>
                    <div class="project-cash__docs">
                        <a class="b-link b-link_style_italic" href="<?php the_field('doc'); ?>">Скачать</a> <span>документацию</span>
                    </div>
                <?php } ?>
            </div>
            <div class="project-date">
            <?php if (in_category(3)){ ?>
                <div class="project-date__caption">
                    Дата реализации проекта:
                </div><?php the_field('date-fin'); ?>
            <?php } else if (in_category(4)){ ?>
                <div class="project-date__caption">
                    Проект начат:
                </div><?php the_field('date-start'); ?>
            <?php } ?>
            </div>
        </div>
        <div class="project-content">
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