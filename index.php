<?php get_header(); ?>
<!-- front page -->
    <?php if (is_front_page()){ ?>
        <?php include(TEMPLATEPATH . '/frontpage.php'); ?>
    <?php } else{ ?>
        <?php if ( is_category(1)|| in_category(6)|| in_category(7)) { ?>
            <div class="content">
                <?php if ( is_category(1)) { ?>
                <h1 class="heading heading_level_1">Новости</h1>
                    <ul class="news">
                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                            <li class="news__item" id="post-<?php the_ID(); ?>">
                                <div class="news__date">
                                    <?php the_time('j F'); ?>
                                </div>
                                <?php if ( in_category(11)) { ?>
                                    <div class="project-title">Новость проекта</div>
                                <?php } ?>             
                                <a class="b-link" href="<?php the_permalink() ?>"><?php the_post_thumbnail(); ?><?php the_title(); ?></a>
                            </li>
                        <?php endwhile; else: ?>
                            <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
                        <?php endif; ?>
                        <?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>
                    </ul>
                <?php } else if ( is_category(6)){ ?>
                <h1 class="heading heading_level_1"><?php $cat = get_the_category(); echo $cat[0]->cat_name; ?></h1>
                <p><?php echo category_description(6); ?></p>
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
                <h1 class="heading heading_level_1"><?php $cat = get_the_category(); echo $cat[0]->cat_name; ?></h1>
                <p><?php echo category_description(7); ?></p>
                <?php } ?>
            </div>
<!-- Cashflow page -->
            <?php if (is_category(7)){ ?>
                <div class="link-block">
                    <a class="b-link cashflow-curent all" href="#">Все</a>
                    <a class="b-link b-link_type_dashed income" href="#">Приход</a>
                    <a class="b-link b-link_type_dashed outcome" href="#">Расход</a>
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
                         <?php if (have_posts()) : while (have_posts()) : the_post();
                            $is_income = get_field("direction") == "Приход"; ?>
                                <tr class="table__row table__row_type_cashflow table__row_flow_<?php if ($is_income) { echo "income"; } else { echo "outgo"; } ?>">
                                <td class="table__cell table__cell_type_sum"><?php if ($is_income) { echo "↓"; } else { echo "↑"; } the_field('sum'); ?> грн.</td>
                                <td class="table__cell table__cell_type_date">
                                    <?php the_time('j F'); ?> <?php the_time('G:i'); ?>
                                </td>
                                <td class="table__cell table__cell_type_from">
                                    <?php the_field('from'); ?>
                                </td>
                                <td class="table__cell">
                                    <?php $project = get_field('project'); ?>    
                                    <a class="b-link b-link_style_italic" href="<?php echo home_url(). "/". $project[0]->post_name; ?>"><?php echo $project[0]->post_title; ?></a>
                                </td>
                                <td class="table__cell table__cell_type_comment">
                                    <?php the_title(); ?>
                                </td>
                            </tr>
                        <?php endwhile; else: ?>
                            <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
                        <?php endif; ?>
                        <?php posts_nav_link(' &#8212; ', __('&laquo; Newer Posts'), __('Older Posts &raquo;')); ?>
                    </tbody>
                </table>
                <div class="button hidden">
                    <a class="b-link b-link_type_button" href="#">Загрузить ещё</a>
                </div>
            <?php } ?>
<!-- projects page -->
        <?php } else if ( is_category(2)){ ?>
            <div class="content">
                <h1 class="heading heading_level_1">Проекты</h1>
                <?php echo category_description(2); ?> 
            </div>
            <div class="projects-columns">
                <div class="projects-columns__column">
                    <div class="projects-columns__title clearfix">Сделано</div>
                    <div class="projects-columns__wrap">
                        <?php $posts = get_posts( "category=3&showposts=3" ); ?>
                        <?php if ($posts) : ?>
                            <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                                <div class="projects-columns__item">
                                    <div class="project-images clearfix ">
                                        <?php
                                        $left_img = get_field('left_img');
                                        $right_img = get_field('right_img');
                                        $size = "thumbnail"; // (thumbnail, medium, large, full or custom size)
                                        $image_l = wp_get_attachment_image_src( $left_img, $size ); 
                                        $image_r = wp_get_attachment_image_src( $right_img, $size );
                                        ?>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-l" src="<?php echo $image_l[0]; ?>"/></a>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-r" src="<?php echo $image_r[0]; ?>"/></a>
                                    </div>
                                    <a class="b-link" href="<?php the_permalink() ?>"><a class="b-link" href="<?php the_permalink() ?>">
                                        <?php $title = get_the_title();
                                        $trimmed_title = rtrim(mb_substr($title, 0, 45));
                                        echo mb_strlen($title) > mb_strlen($trimmed_title) ? $trimmed_title . '&hellip;' : $title; ?>
                                    </a>
                                    <div class="text text_style_italic">
                                        <?php
                                        $comment = get_field('comment');
                                        if (mb_strlen($comment) > 80) {
                                           $comment = rtrim(mb_substr($comment, 0, 80)) . '&hellip;';
                                        }
                                        echo $comment;
                                        ?>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="projects-columns__column">
                    <div class="projects-columns__title clearfix">Делаем</div>
                    <div class="projects-columns__wrap">
                        <?php $posts = get_posts( "category=4&showposts=3" ); ?>
                        <?php if ($posts) : ?>
                            <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                                <div class="projects-columns__item">
                                    <div class="project-images clearfix ">
                                        <?php 
                                        $left_img = get_field('left_img');
                                        $right_img = get_field('right_img');
                                        $size = "thumbnail"; // (thumbnail, medium, large, full or custom size)
                                        $image_l = wp_get_attachment_image_src( $left_img, $size ); 
                                        $image_r = wp_get_attachment_image_src( $right_img, $size );
                                        ?>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-l" src="<?php echo $image_l[0]; ?>"/></a>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-r" src="<?php echo $image_r[0]; ?>"/></a>
                                    </div>
                                    <a class="b-link" href="<?php the_permalink() ?>"><a class="b-link" href="<?php the_permalink() ?>">
                                        <?php $title = get_the_title();
                                        $trimmed_title = rtrim(mb_substr($title, 0, 45));
                                        echo mb_strlen($title) > mb_strlen($trimmed_title) ? $trimmed_title . '&hellip;' : $title; ?>
                                    </a>
                                    <div class="text text_style_italic">
                                        <?php
                                        $comment = get_field('comment');
                                        if (mb_strlen($comment) > 80) {
                                           $comment = rtrim(mb_substr($comment, 0, 80)) . '&hellip;';
                                        }
                                        echo $comment;
                                        ?>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="projects-columns__column">
                    <div class="projects-columns__title clearfix">Планы</div>
                    <div class="projects-columns__wrap">
                        <?php $posts = get_posts( "category=5&showposts=3" ); ?>
                        <?php if ($posts) : ?>
                            <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                                <div class="projects-columns__item">
                                    <div class="project-images clearfix ">
                                        <?php 
                                        $left_img = get_field('left_img');
                                        $right_img = get_field('right_img');
                                        $size = "thumbnail"; // (thumbnail, medium, large, full or custom size)
                                        $image_l = wp_get_attachment_image_src( $left_img, $size ); 
                                        $image_r = wp_get_attachment_image_src( $right_img, $size );
                                        ?>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-l" src="<?php echo $image_l[0]; ?>"/></a>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-r" src="<?php echo $image_r[0]; ?>"/></a>
                                    </div>
                                    <a class="b-link" href="<?php the_permalink() ?>">
                                        <?php $title = get_the_title();
                                        $trimmed_title = rtrim(mb_substr($title, 0, 45));
                                        echo mb_strlen($title) > mb_strlen($trimmed_title) ? $trimmed_title . '&hellip;' : $title; ?>
                                    </a>
                                    <div class="text text_style_italic">
                                        <?php
                                        $comment = get_field('comment');
                                        if (mb_strlen($comment) > 80) {
                                           $comment = rtrim(mb_substr($comment, 0, 80)) . '&hellip;';
                                        }
                                        echo $comment;
                                        ?>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="button hidden">
                    <a class="b-link b-link_type_button" href="/">Загрузить ещё</a>
                </div>
            </div>
<!-- page of done projects -->
        <?php } else if ( is_category(3)){ ?>
        <div class="content">
            <h1 class="heading heading_level_1">Сделано</h1>
        </div>
            <div class="projects-columns">
                <div class="projects-columns__single">
                    <div class="projects-columns__wrap">
                        <?php $posts = get_posts( "category=3" ); ?>
                        <?php if ($posts) : ?>
                            <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                                <div class="projects-columns__item">
                                    <div class="project-images clearfix ">
                                        <?php
                                        $left_img = get_field('left_img');
                                        $right_img = get_field('right_img');
                                        $size = "thumbnail"; // (thumbnail, medium, large, full or custom size)
                                        $image_l = wp_get_attachment_image_src( $left_img, $size ); 
                                        $image_r = wp_get_attachment_image_src( $right_img, $size );
                                        ?>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-l" src="<?php echo $image_l[0]; ?>"/></a>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-r" src="<?php echo $image_r[0]; ?>"/></a>
                                    </div>
                                    <a class="b-link" href="<?php the_permalink() ?>"><a class="b-link" href="<?php the_permalink() ?>">
                                        <?php $title = get_the_title();
                                        $trimmed_title = rtrim(mb_substr($title, 0, 45));
                                        echo mb_strlen($title) > mb_strlen($trimmed_title) ? $trimmed_title . '&hellip;' : $title; ?>
                                    </a>
                                    <div class="text text_style_italic">
                                        <?php
                                        $comment = get_field('comment');
                                        if (mb_strlen($comment) > 80) {
                                           $comment = rtrim(mb_substr($comment, 0, 80)) . '&hellip;';
                                        }
                                        echo $comment;
                                        ?>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
<!-- page of projects in process -->
        <?php } else if ( is_category(4)){ ?>
        <div class="content">
            <h1 class="heading heading_level_1">Делаем</h1>
        </div>
            <div class="projects-columns">
                <div class="projects-columns__single">
                    <div class="projects-columns__wrap">
                        <?php $posts = get_posts( "category=4" ); ?>
                        <?php if ($posts) : ?>
                            <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                                <div class="projects-columns__item">
                                    <div class="project-images clearfix ">
                                        <?php 
                                        $left_img = get_field('left_img');
                                        $right_img = get_field('right_img');
                                        $size = "thumbnail"; // (thumbnail, medium, large, full or custom size)
                                        $image_l = wp_get_attachment_image_src( $left_img, $size ); 
                                        $image_r = wp_get_attachment_image_src( $right_img, $size );
                                        ?>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-l" src="<?php echo $image_l[0]; ?>"/></a>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-r" src="<?php echo $image_r[0]; ?>"/></a>
                                    </div>
                                    <a class="b-link" href="<?php the_permalink() ?>"><a class="b-link" href="<?php the_permalink() ?>">
                                        <?php $title = get_the_title();
                                        $trimmed_title = rtrim(mb_substr($title, 0, 45));
                                        echo mb_strlen($title) > mb_strlen($trimmed_title) ? $trimmed_title . '&hellip;' : $title; ?>
                                    </a>
                                    <div class="text text_style_italic">
                                        <?php
                                        $comment = get_field('comment');
                                        if (mb_strlen($comment) > 80) {
                                           $comment = rtrim(mb_substr($comment, 0, 80)) . '&hellip;';
                                        }
                                        echo $comment;
                                        ?>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
<!-- page of projects in plans -->
        <?php } else if ( is_category(5)){ ?>
        <div class="content">
            <h1 class="heading heading_level_1">Планы</h1>
        </div>
            <div class="projects-columns">
                <div class="projects-columns__single">
                    <div class="projects-columns__wrap">
                        <?php $posts = get_posts( "category=4" ); ?>
                        <?php if ($posts) : ?>
                            <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                                <div class="projects-columns__item">
                                    <div class="project-images clearfix ">
                                        <?php 
                                        $left_img = get_field('left_img');
                                        $right_img = get_field('right_img');
                                        $size = "thumbnail"; // (thumbnail, medium, large, full or custom size)
                                        $image_l = wp_get_attachment_image_src( $left_img, $size ); 
                                        $image_r = wp_get_attachment_image_src( $right_img, $size );
                                        ?>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-l" src="<?php echo $image_l[0]; ?>"/></a>
                                        <a href="<?php the_permalink() ?>"><img class="b-icon projects-columns__img-r" src="<?php echo $image_r[0]; ?>"/></a>
                                    </div>
                                    <a class="b-link" href="<?php the_permalink() ?>"><a class="b-link" href="<?php the_permalink() ?>">
                                        <?php $title = get_the_title();
                                        $trimmed_title = rtrim(mb_substr($title, 0, 45));
                                        echo mb_strlen($title) > mb_strlen($trimmed_title) ? $trimmed_title . '&hellip;' : $title; ?>
                                    </a>
                                    <div class="text text_style_italic">
                                        <?php
                                        $comment = get_field('comment');
                                        if (mb_strlen($comment) > 80) {
                                           $comment = rtrim(mb_substr($comment, 0, 80)) . '&hellip;';
                                        }
                                        echo $comment;
                                        ?>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        <?php } else{ ?>
<!-- else pages template -->
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
        <?php get_footer(); ?>
    <?php } ?>