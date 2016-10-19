$(document).ready(function () {

    var mass = $('.slider');
    $('#img-1').addClass('red-frame');

    mass.bind('click', function () {

        mass.removeClass('red-frame');
        $(this).addClass('red-frame');
        $('.main-photo').attr('src', $(this).attr('src'));
        
    });
});