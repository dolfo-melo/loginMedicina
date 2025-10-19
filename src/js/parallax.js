// Parallax Effect
// Selecionando elementos do DOM
const rightElements = document.querySelector("img[class='rightElements']");
const leftElements = document.querySelector("img[class='leftElements']");
const sunElement = document.querySelector("img[class='sunElement']");
const textMain = document.querySelector("h1[class='mainTitle']");
const ajuMap = document.querySelector("img[class='mapaAju']");
const formElement = document.querySelector("img[class='formulario']");

// Pegando a posição inicial do scroll, usando let pois irá variar
let scrollPosition = window.scrollY;

// Adicionando um evento de scroll na janela
window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;

    // Movendo os elementos com base na posição do scroll
    rightElements.style.left = scrollPosition * 0.5 + 'px';
    leftElements.style.left = -scrollPosition * 0.5 + 'px';
    sunElement.style.left = scrollPosition * 0.5 + 'px';
    textMain.style.marginTop = scrollPosition * 0.5 + 'px';
    formElement.style.marginTop = scrollPosition * 0.3 + 'px';
    ajuMap.style.marginLeft = scrollPosition * 0.3 + 'px';
});