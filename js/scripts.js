//slow scroll
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 400);
return false;
});


//filter
$(window).load(function(){
    var $container = $('.thumbnail-list');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolio-menu a').click(function(){
        $('.portfolio-menu .active').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});
