$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    arrows: false
});
var min = $('#timer-min-js').text();
var sec = $('#timer-sec-js').text(),
    int;
int = setInterval(function() {
    if (sec > 0) {
        sec--;
        $('#timer-sec-js').text(sec);
    }
    else if ((sec == 0)&&(min !==0)) {
        min--;
        $('#timer-min-js').text(min);
        sec = 59;
        $('#timer-sec-js').text(59);
    }
    else {
        alert('Таймер истёк!');
        clearInterval(int);

    }
}, 1000);

$('form').submit(function (e) {
    e.preventDefault();
    alert('Форма отправлена (ну типо)');
});

$('#order').on('click', function() {

    let form = '#orderform';

    $('html, body').animate({
        scrollTop: $(form).offset().top
    }, {
        duration: 370,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});