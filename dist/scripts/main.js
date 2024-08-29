// var swiper = new Swiper(".mySwiper", {
// 	spaceBetween: 8,
// 	slidesPerView: 5,
// 	navigation: {
// 		nextEl: '.swiper-next',
// 		prevEl: '.swiper-prev',
// 	},
// });


var swiper = new Swiper(".mySwiper", {
	spaceBetween: 8,
	slidesPerView: 5,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});
var swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 8,
	thumbs: {
		swiper: swiper,
	},
	effect: 'fade',
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});