//DOM Manipulation

//getElementById and guerySelectorAll 
//Styling Elements

// const title = document.getElementById('main');
// console.log(title);
// title.style.color = 'green';

// const listItems =  document.querySelectorAll('.movie');
// console.log(listItems);

// for(i=0; i<listItems.length; i++) {
//     listItems[i].style.fontSize = '1rem';
// }

//Ceating Elements

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// //Adding Elements

// ul.append(li);

// //Modifying the text

// li.innerText = 'X-men';

// //Modifying attributes values

// li.setAttribute('class', 'movie');
// li.removeAttribute('class');

// const title = document.querySelector('#main');
// console.log(title.getAttribute('id'));

// li.classList.add('movie');
// console.log(li.classList.contains('movie')); //true
// console.log(ul);

// //Remove Elements

// li.remove();
// const List = document.getElementsByClassName('movie');
// List[0].style.color = 'blue';
// List[1].style.marginTop = '60px';

// const text =  document.getElementsByTagName('h1');
// console.log(text[0]);
// console.log(text[0].textContent);
// console.log(text[0].innerText);
// console.log(text[0].innerHTML);


//Parent Node Traversal

const list = document.querySelector('.movies');
// console.log(list.parentNode);
// console.log(list.parentElement);

// //Grand parent Node

// console.log(list.parentNode.parentNode);
// console.log(list.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);

//Child nodes

console.log(list.childNodes);
// console.log(list.childNodes[1]);
// console.log(list.firstChild);
// console.log(list.lastChild);
list.childNodes[1].style.fontFamily = "Vardana";
list.childNodes[3].style.color = 'orange';
list.childNodes[5].backgroundColor = 'yellow';