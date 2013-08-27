<div class="sidebar">
                <a class="b-link logo" href="/"></a>
                <ul class="submenu">

                <?php if (is_front_page()){ ?>
                    <?php  
                        global $post;  
                            $args = array( 'numberposts' => -1, 'category' => 6 );  
                            $myposts = get_posts( $args );  
                        foreach( $myposts as $post ) :  setup_postdata($post); ?>  
                             <li class="submenu__item">
                                <a class="b-link"> href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                             </li>  
                        <?php endforeach; ?>
                    ?>
                <?php } else{ ?>
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
                <?php } ?>
                </ul>
            </div>