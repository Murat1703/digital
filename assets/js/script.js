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



let burger = document.querySelector('.burger-menu');
let burgerContainer = document.querySelector('.burger-menu-container');
let bodyLck = document.querySelector('body');
burger.addEventListener('click', function()
	{   
		burgerContainer.classList.toggle('active');
		bodyLck.classList.toggle('lock');
	});