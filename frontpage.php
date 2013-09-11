            <div class="description">
                <p><?php the_field('description'); ?></p>
            </div>
            <h2 class="heading heading_level_2 main-heading">
                <a class="b-link b-link_type_main" href="<?php echo site_url(); ?>/?cat=2">Наши проекты</a>
            </h2>
            <div class="projects clearfix">
                <div class="projects__item">
                    <div class="projects__title">
                        Сделано <a class="b-link" href="<?php echo site_url(); ?>/?cat=3">(<?php echo get_category(3)->category_count; ?> проектов)</a>
                    </div>
                    <?php $posts = get_posts( "category=3&showposts=1" ); ?>
                    <?php if ($posts) : ?>
                        <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                            <a class="b-link b-link_type_project" href="<?php the_permalink() ?>"><?php the_post_thumbnail(); ?><?php the_title(); ?></a>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
                <div class="projects__item">
                    <div class="projects__title">
                        Делаем <a class="b-link" href="<?php echo site_url(); ?>/?cat=4">(<?php echo get_category(4)->category_count; ?> проектов)</a>
                    </div>
                    <?php $posts = get_posts( "category=4&showposts=1" ); ?>
                    <?php if ($posts) : ?>
                        <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                            <a class="b-link b-link_type_project" href="<?php the_permalink() ?>"><?php the_post_thumbnail(); ?><?php the_title(); ?></a>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
                <div class="projects__item">
                    <div class="projects__title">
                        Планы <a class="b-link" href="<?php echo site_url(); ?>/?cat=5">(<?php echo get_category(5)->category_count; ?> проектов)</a>
                    </div>
                    <?php $posts = get_posts( "category=5&showposts=1" ); ?>
                    <?php if ($posts) : ?>
                        <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                            <a class="b-link b-link_type_project" href="<?php the_permalink() ?>"><?php the_post_thumbnail(); ?><?php the_title(); ?></a>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="banking">
                <div class="banking__title">
                    <span class="banking__title-green">Ты</span> тоже <span class="banking__title-green">можешь</span> помочь сделать мир <span class="banking__title-green">лучше!</span>
                </div>
                <h4 class="heading heading_level_4">
                    Перевести деньги
                </h4>
                <div class="text">
                    БО «Фонд Місто Мрії» в <a class="b-link" href="/">Приватбанке</a>
                </div>
                <?php query_posts('page_id=138');  ?>
                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                    <pre class="banking__details">Счет  <?php the_field('account'); ?></pre>
                    <pre class="banking__details">ОКПО  <?php the_field('okpo'); ?></pre>
                    <pre class="banking__details">МФО   <?php the_field('mfo'); ?></pre>
                <?php endwhile; ?>
                <?php endif; ?>
                <?php wp_reset_query(); ?>
                <a class="b-link b-link_type_block" href="/volontery/">Быть волонтёром</a>
                <br>
                <a class="b-link b-link_type_block" href="<?php echo site_url(); ?>/?cat=6">Стать партнёром</a>
            </div>
            <div class="news-list">
                <h1 class="heading heading_level_1">
                    Новости
                </h1>
                <?php $posts = get_posts( "category=1&showposts=3" ); ?>
                    <?php if ($posts) : ?>
                        <?php foreach ($posts as $post) : setup_postdata ($post); ?>
                            <div class="news-list__item" id="post-<?php the_ID(); ?>">
                                <div class="news-list__date">
                                    <?php the_time('j F'); ?>
                                </div>
                                <a class="b-link b-link_style_italic" href="<?php the_permalink() ?>"><?php the_title(); ?></a>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                <div class="text news__more">
                    Больше - <a class="b-link" href="<?php echo site_url(); ?>/?cat=1">в архиве</a>
                </div>
            </div>
            <div class="cashflow">
                <h1 class="heading heading_level_1">
                    Денежный поток
                </h1>
                <?php $posts = get_posts( "category=7&showposts=3" ); ?>
                    <?php if ($posts) : ?>
                        <?php foreach ($posts as $post) : setup_postdata ($post);
                             $is_income = get_field("direction") == "Приход"; ?>
                          <div class="cashflow__item">
                              <div class="title">
                                <?php if ($is_income) { echo "↓"; } else { echo "↑"; } the_field('sum'); ?> грн.
                            </div>
                            <div class="cashflow__target">
                                <?php if ($is_income) { echo "от"; } else { echo "на"; }; ?>
                            </div>
                            <div class="heading-text">
                                <?php if ($is_income) { echo the_field('from'); } else { echo the_title(); }; ?>
                            </div>
                            <div class="cashflow__date">
                                в <?php the_time('G:i'); ?>, <?php the_time('j F Y'); ?>
                            </div>
                          </div>  
                        <?php endforeach; ?>
                    <?php endif; ?>
                    <div class="text news__more">
                        Показать <a class="b-link" href="<?php echo site_url(); ?>/?cat=7">весь список</a>
                    </div>
                </div>
            <?php get_footer(); ?>
            </div>
