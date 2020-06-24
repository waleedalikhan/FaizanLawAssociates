AOS.init();

$('#whatsDiv').floatingWhatsApp({
	phone: '+92 309 8189235',
	position: 'right',
	popupMessage: 'Hello, how can we help you?',
	message: "I'd like to now more about your association",
	showPopup: true,
	showOnIE: false,
	headerTitle: 'Welcome',
	buttonImage: '<img src="whatsapp.svg" />',
	zIndex: 9
});

$(window).scroll(function () {
	let position = $(this).scrollTop();
	if (position >= 50) {
		$('nav').addClass('custom-nav');
	} else {
		$('nav').removeClass('custom-nav');
	}
});


$(function () {
	$('.nav-link').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('#open-nav').on('click', function () {
		$(".side-bar").css("transform", "scaleX(1)");
	});
	$('#close-nav').on('click', function () {
		$(".side-bar").css("transform", "scaleX(0)");
	});
	$('.side-bar-link').on('click', function () {
		$(".side-bar").css("transform", "scaleX(0)");
	});
	$(".client-single").on("click", function (event) {
		event.preventDefault();

		var active = $(this).hasClass("active");

		var parent = $(this).parents(".testi-wrap");

		if (!active) {
			var activeBlock = parent.find(".client-single.active");

			var currentPos = $(this).attr("data-position");

			var newPos = activeBlock.attr("data-position");

			activeBlock
				.removeClass("active")
				.removeClass(newPos)
				.addClass("inactive")
				.addClass(currentPos);
			activeBlock.attr("data-position", currentPos);

			$(this)
				.addClass("active")
				.removeClass("inactive")
				.removeClass(currentPos)
				.addClass(newPos);
			$(this).attr("data-position", newPos);
		}
	});
	$("#closeAlert").on("click", function (e) {
		e.preventDefault();

		$("#covid19").css("bottom", "-50%");
	});
});

let slides = 1;

if (window.innerWidth > 991) {
	slides = 2;
}

var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	slidesPerView: slides,
	speed: 400,
	spaceBetween: 40,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});