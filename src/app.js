// NAV BAR VARIABLES

const menuBtn = document.querySelector('.menu-icon i');
const searchBtn = document.querySelector('.search-icon');
const cancelBtn = document.querySelector('.cancel-icon');
const items = document.querySelector('.nav-items');
const form = document.querySelector('form');

// MAIN SLIDER VARIABLES

const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
var slideNumber = 0;

// NAV BAR

menuBtn.addEventListener('click', () => {
	items.classList.add('active');
	menuBtn.classList.add('hide');
	searchBtn.classList.add('hide');
	cancelBtn.classList.add('show');
	cancelBtn.classList.add('show');
});
cancelBtn.addEventListener('click', () => {
	items.classList.remove('active');
	menuBtn.classList.remove('hide');
	searchBtn.classList.remove('hide');
	cancelBtn.classList.remove('show');
	form.classList.remove('active');
	cancelBtn.style.color = '#783ce3';
});
searchBtn.addEventListener('click', () => {
	form.classList.add('active');
	searchBtn.classList.add('hide');
	cancelBtn.classList.add('show');
});

//image slider next button
nextBtn.addEventListener('click', () => {
	slides.forEach((slide) => {
		slide.classList.remove('active-slide');
	});

	slideNumber++;

	if (slideNumber > numberOfSlides - 1) {
		slideNumber = 0;
	}

	slides[slideNumber].classList.add('active-slide');
});

//image slider previous button

nextBtn.addEventListener('click', () => {
	slides.forEach((slide) => {
		slide.classList.remove('active-slide');
	});

	slideNumber++;

	if (slideNumber > numberOfSlides - 1) {
		slideNumber = 0;
	}

	slides[slideNumber].classList.add('active-slide');
});

//image slider previous button
prevBtn.addEventListener('click', () => {
	slides.forEach((slide) => {
		slide.classList.remove('active-slide');
	});

	slideNumber--;

	if (slideNumber < 0) {
		slideNumber = numberOfSlides - 1;
	}

	slides[slideNumber].classList.add('active-slide');
});

//image slider autoplay
var playSlider;

var repeater = () => {
	playSlider = setInterval(function () {
		slides.forEach((slide) => {
			slide.classList.remove('active-slide');
		});

		slideNumber++;

		if (slideNumber > numberOfSlides - 1) {
			slideNumber = 0;
		}

		slides[slideNumber].classList.add('active-slide');
	}, 4000);
};
repeater();

//Stop the image slider autoplay on mouseover
slider.addEventListener('mouseover', () => {
	clearInterval(playSlider);
});

//Start the image slider autoplay again on mouseout
slider.addEventListener('mouseout', () => {
	repeater();
});

function carruselPrev(num) {
	if (prev.item(num)) {
		carrusel.item(num).scrollLeft -= 850;
	} else {
		carrusel.scrollLeft = 0;
	}
}
function carruselNext(num) {
	if (prev.item(num)) {
		carrusel.item(num).scrollLeft += 850;
	} else {
		carrusel.scrollLeft = 0;
	}
}
