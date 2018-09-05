$(document).ready(function(){
 
    // hide #back-top first
    $("#go-top").hide();
    // $("#go-top").hide().removeAttr("href");
 
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#go-top').fadeIn();
            } else {
                $('#go-top').fadeOut();
            }
        });
 
        // scroll body to 0px on click
        $('#go-top').click(function () {
            $('body,html').animate({scrollTop: 0}, "slow");
            return false;
        });
    });
 
});