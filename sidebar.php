<div class="sidebar">
                <a class="b-link logo" href="/"></a>
                <?php if (is_page(33)){ ?>
                    <?php wp_nav_menu( array( 'theme_location' => 'about' ) ); ?>
                <?php } else if(in_category(6)){ ?>
                    <?php wp_nav_menu( array( 'theme_location' => 'partners' ) ); ?>
                <?php } else if(is_page_template('single-news.php')){ ?>
                <ul class="menu">
                    <li class="submenu__item">
                        <a class="b-link" href="<?php echo site_url(); ?>/?cat=1">К списку новостей</a>
                    </li>
                </ul>
                <?php } else if(is_page_template('single-project.php')){ ?>
                <ul class="menu">
                    <li class="submenu__item">
                        <a class="b-link" href="<?php echo site_url(); ?>/?cat=2">К списку проектов</a>
                    </li>
                </ul>
                <?php } else{ ?>
                
                <?php } ?>
            </div>