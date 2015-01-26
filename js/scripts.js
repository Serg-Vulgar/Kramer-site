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


//dropdown menu
$(function() {
  $('.icon').click(function() {
    if($('.items').is(':visible')) {
      $('.items').removeClass('showitems');
    }
    else {
      $('.items').addClass('showitems');
    }  
 });
});


// Click event
offset = 0;
    $('#menu li a[href^="#"]').click(function(event) {

        // Prevent from default action to intitiate
        event.preventDefault();
         
        //remove active from all anchor and add it to the clicked anchor
        $('#menu li a[href^="#"]').removeClass("active")
        $(this).addClass('active');
        
        // The id of the section we want to go to
        var anchorId = $(this).attr('href');

        // Our scroll target : the top position of the section that has the id referenced by our href
        var target = $(anchorId).offset().top - offset;
        console.log(target);

        $('html, body').stop().animate({ scrollTop: target }, 500, function () {
            window.location.hash = anchorId;
        });

        return false;
    });

//check the pages when scroll event occurs
$(window).scroll(function(){
    // Get the current vertical position of the scroll bar
    position = $(this).scrollTop();
    $('#menu li a[href^="#"]').each(function(){
          var anchorId = $(this).attr('href'); 
           var target = $(anchorId).offset().top - offset;
           // check if the document has crossed the page
        console.log(position,target);
        if(position>=target){
             //remove active from all anchor and add it to the clicked anchor
            $('#menu li a[href^="#"]').removeClass("active")
            $(this).addClass('active'); 
        }
    })
})
$(function(){
    //set our scroll state after dom ready
    $(window).scroll();
})