/**
 * Created by Sirozhka on 25.02.2017.
 */
$(document).ready(function () {
    $('.tab:not(.active)').hide();

    $('ul.nav-tabs').on('click', "a:not(.active)", function () {
        var prev = $('.nav-link.active').attr("href");
        $(prev).hide();
        $('.nav-link.active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr("href");
        console.log(tab);
        $(tab).show();
    });
});
