const menuHamburger = document.querySelector('.menu-hamburger');
const containerMenu = document.querySelector('.container-menu-mobile');
const navMenu = document.querySelector('[data-menu="itens"]');
const fechar = document.querySelector('.fechar');

function ativarMenu(event){
  containerMenu.classList.add('menu-ativo');
  navMenu.classList.add('menu-ativo');
}

function fecharMenu(event) {
  containerMenu.classList.remove('menu-ativo');
  navMenu.classList.remove('menu-ativo');
}

menuHamburger.addEventListener('click', ativarMenu);

fechar.addEventListener('click', fecharMenu);