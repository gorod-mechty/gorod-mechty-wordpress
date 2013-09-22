<div class="footer">
                <div class="footer__contacts">
                    <div class="footer__text">
                    © <?php echo date('Y'); ?> БО «Фонд Город Мечты»
                    <?php query_posts('page_id=138');  ?>
                    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <pre>Счет  <?php the_field('account'); ?></pre>
                        <pre>ОКПО  <?php the_field('okpo'); ?></pre>
                        <pre>МФО   <?php the_field('mfo'); ?></pre>
                    <?php endwhile; ?>
                    <?php endif; ?>
                    <?php wp_reset_query(); ?>
                    </div><a class="footer__link" href="mailto:info@gorod-mechty.org">info@gorod-mechty.org</a>
                </div>
                <div class="socials">
                    <a class="socials__link socials__link_type_vk" href="http://vk.com/gorod.mechty">ВКонтакте</a><a class="socials__link socials__link_type_fb" href="/">FaceBook</a>
                </div>
                <div class="copyright">
                    Создание сайта - <a class="b-link" href="http://tadatuta.ru">студия «Тадатута»</a>
                </div>
            </div>
        </div>
        <?php wp_footer(); ?>
    </body>
</html>