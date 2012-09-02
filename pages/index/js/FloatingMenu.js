/**
 * Created with JetBrains WebStorm.
 * User: Vladimir
 * Date: 26.08.12
 * Time: 14:24
 * To change this template use File | Settings | File Templates.
 */
function initFloatingMenu(barId) {
    var offset = $(barId).offset();
    var topPadding = 80;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top)
            $(barId).stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
        else
            $(barId).stop().animate({marginTop:40});
    });
}