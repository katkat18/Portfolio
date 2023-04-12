let isClicked = false;
let isWhite = true;

$('#menu-btn').click(function (e) {
    e.preventDefault();
    if(isClicked){
        $('#menu-img').attr({
            'src':'images/menu_pink2.svg',
            'alt': 'menu'
        });
        $('.sidebar').hide();
        isClicked = false;
    }else{
        $('#menu-img').attr({
            'src':'images/x.svg',
            'alt': 'close menu'
        });
        $('.sidebar').show();
        isClicked = true;
    }

    //isClicked ? false : true;
    //$('.sidebar').slideToggle('fast');

});

//close menu whenever it is clicked 
$('.menu-item').click(function() {
    if($(window).width() <= 1024){
        $('.sidebar').hide();
        $('#menu-img').attr({
            'src':'images/menu_pink2.svg',
            'alt': 'menu'
        });
        isClicked = false;
    }
});

$(window).resize(function() {
    console.log(`window size: ${$(window).width()}`);
    if($(window).width() < 1009 && !isClicked){
        $('.sidebar').hide();
        $('#menu-img').attr({
            'src':'images/menu_pink2.svg',
            'alt': 'menu'
        });  
    }else if($(window).width() < 1009 && isClicked) {
        $('.sidebar').show(); 
        $('#menu-img').attr({
            'src':'images/x.svg',
            'alt': 'close menu'
        });
    }else{
        $('.sidebar').show();
        $('#menu-img').attr({
            'src':'images/menu_pink2.svg',
            'alt': 'menu'
        });
    }
});


//menu hover
$('.clickables').mouseenter(function() {
    console.log(`hovering on: ${$(this).data('hover')}`);
    $(this).attr({
        'src': `images/${$(this).data('hover')}_hover.svg`,
        'alt': `${$(this).data('hover')}`
    });
});

$('.clickables').mouseleave(function() {
    console.log(`hovering on: ${$(this).data('hover')}`);
    $(this).attr({
        'src': `images/${$(this).data('hover')}.svg`,
        'alt': `${$(this).data('hover')}`
    });
});

$('.clickables').click(function () {
    $(this).attr({
        'src': `images/${$(this).data('hover')}.svg`,
        'alt': `${$(this).data('hover')}`
    });
});