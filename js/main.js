$('a[href="#"]').click(e=>{e.preventDefault();});

$('.our_price__slider').slick({
    prevArrow: $('.our_price__slider-prev'),
    nextArrow: $('.our_price__slider-next')
});
$('.video-slider').slick({
    slidesToShow:2,
    slidesToScroll:1,
    dots: false,
    arrows: true,
    prevArrow: `<svg class="slick-arrow slick-prev" style="transform: translate(0, -50%) rotate(180deg)" width="21" height="47" viewBox="0 0 21 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L20 24.5714L1 46" stroke="#0F83BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    nextArrow: `<svg class="slick-arrow slick-next" width="21" height="47" viewBox="0 0 21 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L20 24.5714L1 46" stroke="#0F83BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow:1,
                arrows: false,
                dots: true
            }
        }
    ]
});

window.addEventListener('load', function () {
    $('.lazy').each((i,el)=>{
        el.src = el.dataset.src;
    })
});

$('button.burger').click(()=>{
    $('header').toggleClass('active');
});
$('a.service').click(()=>{
    $('.service__menu').toggleClass('active__menu');
});
$(document).ready(function(){
    $('.slick-slide-review').slick({
        slidesToShow:4,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });
  }); 