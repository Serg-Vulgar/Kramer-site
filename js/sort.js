// $(document).ready(function() {
 
//         $('.thumbnail-list').isotope({
//             itemSelector: '.list-item',
//         });
 
//         $('.portfolio-menu a').click(function(){
 
//             $('.portfolio-menu a').removeClass('active');
//             $(this).addClass('active');
//             var selector = $(this).attr('data-filter');
 
//             $('.thumbnail-list').isotope({
//                 filter: selector,
//                 animationOptions: {
//                     duration: 1000,
//                     easing: 'easeOutQuart',
//                     queue: false
//                 }
//             });
//             return false;
 
//         });
 
// });


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
