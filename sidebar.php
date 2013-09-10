<div class="sidebar">
                <a class="b-link logo" href="/"></a>
                <?php if (is_page(33)){ ?>
                    <?php wp_nav_menu( array( 'theme_location' => 'about' ) ); ?>
                <?php } else if(in_category(6)){ ?>
                    <?php wp_nav_menu( array( 'theme_location' => 'partners' ) ); ?>
                <?php } else if(in_category(1)){ ?>
                <ul class="menu">
                    <li class="submenu__item">
                        <a class="b-link" href="<?php echo site_url(); ?>/?cat=1">К списку новостей</a>
                    </li>
                </ul>
                <?php } else if(in_category(2)){ ?>
                <ul class="menu">
                    <li class="submenu__item">
                        <a class="b-link" href="<?php echo site_url(); ?>/?cat=2">К списку проектов</a>
                    </li>
                </ul>
                <ul class="menu">
                    <li class="submenu__item">Новости проекта</li>
                    <?php $news = get_field('project_news'); ?>
                        <?php echo gettype($news); echo $news; ?>
                        <?php
                            foreach ($news as $news_item) {
                                echo '<li class="submenu__item"><a class="b-link" href="' . home_url() . "/" . $news_item->post_name . '">' . $news_item->post_title . '</a></li>';
                            }
                            unset($news_item);
                        ?>
                </ul>
                <?php } else{ ?>
                
                <?php } ?>
            </div>