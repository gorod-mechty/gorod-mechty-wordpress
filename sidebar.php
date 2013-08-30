<div class="sidebar">
                <a class="b-link logo" href="/"></a>
                <?php if (is_page(33)){ ?>
                    <?php wp_nav_menu( array( 'theme_location' => 'about' ) ); ?>
                <?php } else if(in_category(6)){ ?>
                    <?php wp_nav_menu( array( 'theme_location' => 'partners' ) ); ?>
                <?php } else if(in_category(1)){ ?>
                <ul class="menu">
                    
                </ul>
                <?php } else{ ?>
                <ul class="submenu">
                    <li class="submenu__item">
                        <a class="b-link" href="/">Реквизиты</a>
                    </li>
                    <li class="submenu__item">Партнеры
                    </li>
                    <li class="submenu__item">
                        <a class="b-link" href="/">Волонтёры</a>
                    </li>
                    <li class="submenu__item">
                        <a class="b-link" href="/">Расходные материалы</a>
                    </li>
                </ul>
                <?php } ?>
            </div>