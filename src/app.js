// NAV BAR VARIABLES

const menuBtn = document.querySelector('.menu-icon i');
const searchBtn = document.querySelector('.search-icon');
const cancelBtn = document.querySelector('.cancel-icon');
const items = document.querySelector('.nav-items');
const form = document.querySelector('form');

// MAIN SLIDER VARIABLES

let position = 1;

// CARRUSEL VARIABLES

const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');
const carrusel = document.querySelectorAll('#carrusel');

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

// MAIN SLIDER

function slidePosition(n) {
  showSlides((position = n));
}

function nextSlide(n) {
  showSlides((position += n));
}

setInterval(function time() {
  showSlides((position += 1));
}, 4000);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slide');

  if (n > slides.length) {
    position = 1;
  }
  if (n < 1) {
    position = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[position - 1].style.display = 'block';
}

showSlides(position);

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

function spinnerLoad() {
  setTimeout(function () {
    document.getElementById('loading').style.display = 'none';
  }, 4000);
}
