<?php get_header(); ?>
            <div class="content">
                <?php if (is_front_page()){ ?>
                    <?php include(TEMPLATEPATH . '/frontpage.php'); ?>
                <?php } else{ ?>
                    <div class="test">1</div>
                <?php } ?>
            </div>
<?php get_footer(); ?>