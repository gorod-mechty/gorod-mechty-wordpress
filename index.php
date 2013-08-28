<?php get_header(); ?>
                <?php if (is_front_page()){ ?>
                    <?php include(TEMPLATEPATH . '/frontpage.php'); ?>
                <?php } else{ ?>
                    <?php if ( is_category(1)|| in_category(6)|| in_category(7)|| is_archive()) { ?>
                        <div class="content">
                            <h1 class="heading heading_level_1"><?php $cat = get_the_category(); echo $cat[0]->cat_name; ?></h1>
                            <?php if ( is_category(1)|| is_archive()) { ?>
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
                            <?php } else if ( is_category(6)){ ?>
                            <p>…Сколько раз вы, бывая в других городах и странах и подмечая там аккуратные клумбы, ухоженные аллеи и парки, удобные скамейки и необычные памятники, говорили себе: «Ну, почему так не сделать у нас?» Действительно, почему?</p>
                                <div class="partners">
                                    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                                        <div class="partners__item">
                                            <div class="partners__text">
                                                <?php the_content() ?>
                                                <?php if ( get_post_meta($post->ID, 'home', true) ) : ?>
                                                    <a class="b-link" href="http://<?php echo get_post_meta($post->ID, 'home', true) ?>">
                                                        <?php echo get_post_meta($post->ID, 'home', true) ?>
                                                        <?php the_post_thumbnail(); ?>
                                                    </a>
                                                <?php endif; ?>
                                            </div>
                                        </div>
                                    <?php endwhile; else: ?>
                                        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
                                    <?php endif; ?>
                                    <?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>
                                </div>
                            <?php } else if ( is_category(7)){ ?>
                            <p>…Сколько раз вы, бывая в других городах и странах и подмечая там аккуратные клумбы, ухоженные аллеи и парки, удобные скамейки и необычные памятники, говорили себе: «Ну, почему так не сделать у нас?» Действительно, почему?</p>
                            <?php } ?>
                        </div> 
                    <?php } else if ( is_category(2)){ ?>
                        <div class="description">
                            <h1 class="heading heading_level_1"><?php $cat = get_the_category(); echo $cat[0]->cat_name; ?></h1>
                            <div class="projects-columns">
                                <div class="projects-columns__column">
                                    <div class="projects-columns__title clearfix"><?php echo get_category(3)->category_name; ?></div>
                                    <div class="projects-columns__wrap">
                                        <?php $posts = get_posts( "category=3&showposts=3" ); ?>
                                        <?php if ($posts) : ?>
                                            <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                                                <div class="projects-columns__item">
                                                    <?php if ( get_post_meta($post->ID, 'left', true) ) : ?>
                                                        <a class="b-link" href="http://<?php echo get_post_meta($post->ID, 'left', true) ?>"></a>
                                                        <img class="b-icon projects-columns__img-l" src="">
                                                    <?php endif; ?>
                                                </div>
                                            <?php endforeach; ?>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } else{ ?>
                        <div class="content">
                            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                                <h1 class="heading heading_level_1"><?php the_title(); ?></h1>
                                <?php
                                the_content(__('(more...)'));
                                wp_link_pages();
                                edit_post_link(__('Edit This'));
                                ?>
                            <?php endwhile; else: ?>
                                <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
                            <?php endif; ?>
                                <?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>
                        </div>
                    <?php } ?>
                <?php } ?>
<?php get_footer(); ?>