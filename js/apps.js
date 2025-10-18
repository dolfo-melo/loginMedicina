const rightElements = document.querySelector("img[class='rightElements']");
const rightBottomElement = document.querySelector("img[class='rightBottomElement']");
const sunElement = document.querySelector("img[class='sunElement']");
const textMain = document.querySelector("h1");
const formElement = document.querySelector("img[class='formulario']");
let scrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;

    rightElements.style.marginLeft = scrollPosition * 0.5 + 'px';
    rightBottomElement.style.marginLeft = scrollPosition * 0.5 + 'px';
    sunElement.style.marginLeft = scrollPosition * 0.5 + 'px';
    textMain.style.marginTop = scrollPosition * 0.5 + 'px';
    formElement.style.marginTop = scrollPosition * 0.3 + 'px';
});