$(document).ready(function()
{
 AOS.init();
});
let bodyLck = document.querySelector('body');
let goToTop = document.querySelector('.go-to-top');

$(document).on("click", "li a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});
$(document).on("click", "a.go-to-top", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});


$('.responsive').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

window.addEventListener('scroll', function()
{
	if (pageYOffset > 400) {
		goToTop.classList.add('__active_go_tot_top');
	}
	else{
		goToTop.classList.remove('__active_go_tot_top');
	}
})


let burger = document.querySelector('.burger-menu');
let burgerContainer = document.querySelector('.burger-menu-container');
let mobileMenu = document.querySelector('.mobile-menu');
burger.addEventListener('click', function()
	{   
		burgerContainer.classList.toggle('active');
/*		bodyLck.classList.toggle('lock');*/
		mobileMenu.classList.toggle('active');
	});