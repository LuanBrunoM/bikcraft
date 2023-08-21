// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');

function activateLinks(link) {
  const url = location.href
  const href = link.href

  
  if(url.includes(href)) {
    link.classList.add('active');
  }
}
links.forEach(activateLinks)

//Ativar items do orçamento
const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);
  if(element) element.checked = true;
}

parameters.forEach(activeProduct);