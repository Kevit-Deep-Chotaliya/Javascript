import {toggle, changeToFunkyColor} from '/modules/dom-function.js';

const button = document.getElementById('btn');
const img =document.getElementById('btn-img');

button.addEventListener('click', () => {
    toggle(img);
    changeToFunkyColor(button)
})