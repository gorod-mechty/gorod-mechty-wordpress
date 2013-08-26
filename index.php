<?php get_header(); ?>
                <?php if (is_front_page()){ ?>
                    <?php include(TEMPLATEPATH . '/frontpage.php'); ?>
                <?php } else{ ?>
                    <?php if ( is_category(1)|| in_category(6)) { ?>
                        <div class="content">
                            <h1 class="heading heading_level_1"><?php $cat = get_the_category(); echo $cat[0]->cat_name; ?></h1>
                            <?php if ( is_category(1)) { ?>
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
                            <?php } else{ ?>
                                <h2><?php the_title(); ?></h2>
                                the_content(__('(more...)'));
                                wp_link_pages();
                                edit_post_link(__('Edit This'));
                            <?php } ?>
                        </div>
                    <?php } ?>
                <?php } ?>
<?php get_footer(); ?>