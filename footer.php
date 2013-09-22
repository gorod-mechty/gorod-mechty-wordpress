<div class="footer">
                <div class="footer__banking">
                    <?php query_posts('page_id=138');  ?>
                    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <div>Счет <?php the_field('account'); ?></div>
                        <span>ОКПО <?php the_field('okpo'); ?></span>
                        <span>МФО <?php the_field('mfo'); ?></span>
                    <?php endwhile; ?>
                    <?php endif; ?>
                    <?php wp_reset_query(); ?>
                    <div class="footer__contacts">
                        <div class="footer__text">
                        © <?php echo date('Y'); ?> БО «Фонд Город Мечты»
                        </div><a class="footer__link" href="mailto:info@gorod-mechty.org">info@gorod-mechty.org</a>
                    </div>
                </div>
                <div class="socials">
                    <a class="socials__link socials__link_type_vk" href="http://vk.com/gorod.mechty">ВКонтакте</a><a class="socials__link socials__link_type_fb hidden" href="/">FaceBook</a>
                </div>
                <div class="copyright">
                    Создание сайта — <a class="b-link" href="http://tadatuta.ru">студия «Тадатута»</a>
                </div>
            </div>
        </div>
        <?php wp_footer(); ?>
    </body>
</html>