<?php get_header(); ?>
            <div class="content">
                <?php if (is_front_page()){ ?>
                    <?php include(TEMPLATEPATH . '/frontpage.php'); ?>
                <?php } else{ ?>
                    <?php if ( is_category('1') { ?>
                    <div class="content">
                        <h1 class="heading heading_level_1">Новости</h1>
                        <ul class="news">
                            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                                <li class="news__item" id="post-<?php the_ID(); ?>">
                                    <div class="news__date">
                                        <?php the_time('j F'); ?>
                                    </div><a class="b-link b-link_style_italic" href="<?php the_permalink() ?>"><?php the_post_thumbnail(); ?><?php the_title(); ?></a>
                                </li>
                            <?php endwhile; else: ?>
                                <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
                            <?php endif; ?>
                            <?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>
                        </ul>
                    </div>
                    <?php } ?>
                    <?php endwhile; else: ?>
                        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
                    <?php endif; ?>
                    <?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>
                <?php } ?>
            </div>
<?php get_footer(); ?>