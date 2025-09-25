// Menú móvil
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Carrusel básico (busca el primero en la página)
const track = document.querySelector('.carousel-track');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

if (track && btnNext && btnPrev) {
  let index = 0;
  const slides = Array.from(track.children);
  const total = slides.length;

  const update = () => track.style.transform = `translateX(-${index * 100}%)`;

  btnNext.addEventListener('click', () => {
    index = (index + 1) % total;
    update();
  });
  btnPrev.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    update();
  });

  // Autoplay opcional
  setInterval(() => {
    index = (index + 1) % total;
    update();
  }, 4000);
}
