function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Adiciona a classe de animação quando a seção estiver visível na tela
$(window).on('scroll', function() {
    $('.hidden').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).removeClass('hidden').addClass('slide-in-horizontal');
        }
    });
});