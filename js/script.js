// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');

links.forEach((link) => {
  const url = location.href
  const href = link.href

  if(url.includes(href)) {
    link.classList.add('active');
  }
});

// Ativar items do orçamento
const parameters = new URLSearchParams(location.search);

parameters.forEach((parameter) => {
  const element = document.getElementById(parameter);
  if(element) element.checked = true;
});

// Perguntas Frequentes
const questions = document.querySelectorAll('.questions button');

function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute('aria-controls');
  const response = document.getElementById(controls);

  response.classList.toggle('active');
  const active = response.classList.contains('active')
  question.setAttribute('aria-expanded', active);
}

questions.forEach((question) => {
  question.addEventListener('click', activeQuestion);
});

// Galeria de bicicletas
const gallery = document.querySelectorAll('.bike-images img');
const galleryContainer = document.querySelector('.bike-images');

function changeImage(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if(media) galleryContainer.prepend(img);
}

gallery.forEach((img) => {
  img.addEventListener('click', changeImage);
});

// Animação
if(window.SimpleAnime) new SimpleAnime();