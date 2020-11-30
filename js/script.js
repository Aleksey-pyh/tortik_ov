$('a[href="#"]').click(e=>{e.preventDefault();});
$('.slider_FirstScreen').slick({
    dots: true,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
});
$('.slider_master').slick({
    dots: true,
    nextArrow:$('.nextM'),
    prevArrow:$('.prevM'),
});