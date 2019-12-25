let stock = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
]

let rootElem = document.getElementById('root');

let mainElem = document.createElement('div');
mainElem.classList.add('main');
rootElem.appendChild(mainElem);

let slideContainer = document.createElement('div');
slideContainer.id = 'slideContainer';

let l = stock.length-1; // индексы начальных элементов триады картинок: left, center и right, соответственно
let c = 0;
let r = 1;

triada();

function triada() {

    let slideElemLeft = document.createElement('div');
    slideElemLeft.id = `${l}`
    slideElemLeft.style.backgroundImage = `url(${stock[l]})`;
    slideContainer.appendChild(slideElemLeft);

    let slideElemCenter = document.createElement('div');
    slideElemCenter.id = `${c}`;
    slideElemCenter.style.backgroundImage = `url('${stock[c]}')`;
    slideContainer.appendChild(slideElemCenter);

    let slideElemRight = document.createElement('div');
    slideElemRight.id = `${r}`
    slideElemRight.style.backgroundImage = `url('${stock[r]}')`;
    slideContainer.appendChild(slideElemRight);

    slideContainer.style.left = -mainElem.offsetWidth + 'px';
    mainElem.appendChild(slideContainer);
}

let buttonLeftChecker = document.querySelector('#leftButton');
buttonLeftChecker.addEventListener('click', goLeft);

let buttonRightChecker = document.querySelector('#rightButton');
buttonRightChecker.addEventListener('click', goRight);

function goLeft() {
    if (c == 0) {
        l = stock.length - 2;
        c = stock.length - 1;
        r = 0;
    } else if (c == stock.length - 1) {
        l = stock.length - 3;
        c = stock.length - 2;
        r = stock.length - 1;
    } else if (c == 1) {
        l = stock.length - 1;
        c = 0;
        r = 1;
    } else {
        c = c - 1;
        l = c - 1;  
        r = c + 1;     
    }
    slideContainer.style.left = parseInt(slideContainer.style.left) + mainElem.offsetWidth + 'px';
    setTimeout(goFiniter, 300); 
}
 
function goRight() {
    if (c == stock.length - 2) {
        l = stock.length - 2;
        c =  stock.length - 1; 
        r = 0;
    } else if (c == stock.length - 1) {
        l = stock.length - 1;
        c = 0;
        r = 1;
    } else {
        c = c + 1;
        l = c - 1;
        r = c + 1;       
    }
    slideContainer.style.left = parseInt(slideContainer.style.left) - mainElem.offsetWidth + 'px';
    setTimeout(goFiniter, 300);
}

function goFiniter() {
    slideContainer.innerHTML = "";
    triada();
}