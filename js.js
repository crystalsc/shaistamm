// change navbar color when scrolling
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
// smooth scroll above anchor
$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({ scrollTop: target.offset().top - 100 }, 1000);
        return false;
    });
});
// change active tab while scrolling
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    $('.page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance + 200) {
            $('.navigation a').parent().removeClass('active');
            $('.navigation a').eq(i).parent().addClass('active');
        }
    });
});

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

