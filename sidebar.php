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
                        <?php $news = get_field('project_news'); ?>    
                        <a class="b-link" href="<?php echo home_url(). "/". $news[0]->post_name; ?>"><?php echo $news[0]->post_title; ?></a>
                    </li>
                </ul>
                <?php } else{ ?>
                
                <?php } ?>
            </div>