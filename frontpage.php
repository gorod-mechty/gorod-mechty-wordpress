            <div class="description">
                <?php if ( get_post_meta($post->ID, 'description', true) ) : ?>    
                    <p><?php echo get_post_meta($post->ID, 'description', true) ?></p>
                <?php endif; ?>
            </div>
            <h2 class="heading heading_level_2 main-heading">
                <a class="b-link b-link_type_main" href="/category/proekty/">Наши проекты</a>
            </h2>
            <div class="projects clearfix">
                <div class="projects__item">
                    <div class="projects__title">
                        Сделано <a class="b-link" href="/category/proekty/">(<?php echo get_category(3)->category_count; ?> проектов)</a>
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
                        Делаем <a class="b-link" href="/category/proekty/">(<?php echo get_category(4)->category_count; ?> проектов)</a>
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
                        Планы <a class="b-link" href="/category/proekty/">(<?php echo get_category(5)->category_count; ?> проектов)</a>
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
                <pre class="banking__details">
                <?php if ( get_post_meta($post->ID, 'account', true) ) : ?>    
                    <?php echo get_post_meta($post->ID, 'account', true) ?>
                <?php endif; ?>
                </pre>
                <pre class="banking__details">
                <?php if ( get_post_meta($post->ID, 'okpo', true) ) : ?>    
                    ОКПО  <?php echo get_post_meta($post->ID, 'okpo', true) ?>
                <?php endif; ?>
                </pre>
                <pre class="banking__details">
                <?php if ( get_post_meta($post->ID, 'mfo', true) ) : ?>    
                    МФО   <?php echo get_post_meta($post->ID, 'mfo', true) ?>
                <?php endif; ?>
                </pre>
                <a class="b-link b-link_type_block" href="/">Быть волонтёром</a>
                <br>
                <a class="b-link b-link_type_block" href="/">Стать партнёром</a>
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
                <div class="cashflow__item">
                    <div class="title">
                        ↓150 грн
                    </div>
                    <div class="cashflow__target">
                        от
                    </div>
                    <div class="heading-text">
                        Константина Константинопольского
                    </div>
                    <div class="cashflow__date">
                        в 15:35, 07 июня 2013
                    </div>
                </div>
                <div class="cashflow__item">
                    <div class="title">
                        ↑18200 грн
                    </div>
                    <div class="cashflow__target">
                        на
                    </div>
                    <div class="heading-text">
                        закупку материалов для установки скамеек в центральном парке
                    </div>
                    <div class="cashflow__date">
                        в 15:35, 07 июня 2013
                    </div>
                </div>
                <div class="cashflow__item">
                    <div class="title">
                        ↓1100 грн
                    </div>
                    <div class="cashflow__target">
                        от
                    </div>
                    <div class="heading-text">
                        Андрея М.
                    </div>
                    <div class="cashflow__date">
                        в 15:35, 07 июня 2013
                    </div>
                </div>
                <div class="text news__more">
                    Показать <a class="b-link" href="/">весь список</a>
                </div>
            </div>
