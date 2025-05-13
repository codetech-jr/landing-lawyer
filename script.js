let mobileMenuToggle = function () {
    $('.js-menu-toggle').on('click', function (e){
        e.preventDefault();
        if ($('body').hasClass('menu-mobile-active') ) {
            $('body').removeClass('menu-mobile-active')
        } else{
            $('body').addClass('menu-mobile-active')
        }
    });

    $(window).resize(function(){
        let $this = $(this);
        if ($this.width() > 768){
            if ($('body').hasClass('mobile-menu-active') ) {
                $('body').removeClass('mobile-menu-active')
            }
        }
    }).resize();

    $('body').click(function() {
        $(this).removeClass('mobile-menu-active');
    });

    $('.js-mobile-close').on('click', function (e){
        e.preventDefault();
        $(this).removeClass('mobile-menu-active');
    });

    $('.menu-mobile , .js-mobile-close').on('click', function (e){
        e.stopPropagation()
    });
}