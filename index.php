<?php get_header(); ?>
                <?php if (is_front_page()){ ?>
                    <?php include(TEMPLATEPATH . '/frontpage.php'); ?>
                <?php } else{ ?>
                    <?php if ( is_category(1)|| in_category(6)|| in_category(7)) { ?>
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
                        <?php if (is_category(7)){ ?>
                            <div class="link-block">
                                <a class="b-link b-link_type_dashed" href="#">Все</a>
                                <a class="b-link b-link_type_dashed" href="#">Поступления</a>
                                <a class="b-link b-link_type_dashed" href="#">Траты</a>
                            </div>
                            <table class="table">
                                <tbody>
                                    <tr class="table__row">
                                        <th class="table__head">
                                            Сумма
                                        </th>
                                        <th class="table__head">
                                            Дата/Время
                                        </th>
                                        <th class="table__head">
                                            От кого/аноним
                                        </th>
                                        <th class="table__head">
                                            Проект
                                        </th>
                                        <th class="table__head">
                                            Комментарии
                                        </th>
                                    </tr>
                                     <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                                        <tr class="table__row table__row_type_cashflow">
                                            <td class="table__cell table__cell_type_sum">
                                                ↑1500 грн
                                            </td>
                                            <td class="table__cell table__cell_type_date">
                                                08 октября
                                                <div class="table__br"></div>15:35
                                            </td>
                                            <td class="table__cell table__cell_type_from">
                                                Константин Константинопольский
                                            </td>
                                            <td class="table__cell">
                                                <a class="b-link b-link_style_italic" href="#">Установка новых скамеек в центральном парке</a>
                                            </td>
                                            <td class="table__cell table__cell_type_comment">
                                                Закупка материалов
                                            </td>
                                        </tr>
                                    <?php endwhile; else: ?>
                                        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
                                    <?php endif; ?>
                                    <?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>
                                </tbody>
                            </table>
                        <?php } ?>
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
                                                    <img class="b-icon projects-columns__img-l" src="<?php the_field('left_img'); ?>" alt="img">
                                                    <img class="b-icon projects-columns__img-r" src="<?php the_field('right_img'); ?>" alt="img">
                                                    <a class="b-link" href="<?php the_permalink() ?>"><?php the_title(); ?></a>
                                                    <div class="text text_style_italic"><?php the_field('comment'); ?></div>
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