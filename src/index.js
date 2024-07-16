import  home  from "./home";
import menu from "./menu";

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

function homecontent() {
  console.log('home');
  menuButton.classList.remove('tab');
  aboutButton.classList.remove('tab');
  homeButton.classList.add('tab');
  const content = document.querySelector('#content');
  content.innerHTML = ''
  const homect = home();
  content.appendChild(homect);
}

function menucontent() {
  console.log('menu');
  homeButton.classList.remove('tab');
  aboutButton.classList.remove('tab');
  menuButton.classList.add('tab');
  const content = document.querySelector('#content');
  content.innerHTML = '';
  const menuct = menu();
  content.appendChild(menuct);
}

function aboutcontent() {
  console.log('about');
  homeButton.classList.remove('tab');
  menuButton.classList.remove('tab');
  aboutButton.classList.add('tab');
  const content = document.querySelector('#content');
  content.innerHTML = ''
}

homeButton.addEventListener("click", function() {homecontent()});
menuButton.addEventListener("click", function() {menucontent()});
aboutButton.addEventListener("click", function() {aboutcontent()});

homecontent();