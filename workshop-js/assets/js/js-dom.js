// afficher la date
let date = new Date();

// afficher les secondes
let seconds = date.getSeconds();

// afficher les minutes 
let minute = date.getMinutes();

//Afficher les heures
let hour = date.getHours();

//Créer de l'html avec js
//let body = document.body;

//Créer un élément de type div
/*let container = document.createElement('div')
let span = document.createElement('span')*/


// lui ajouter une classe
/*container.setAttribute('class', 'container')
span.innerHTML = 12*/

// on lie le container au body
// body.appendChild(container)

let seconds_d = document.querySelector('.seconds')
let time = date.get

setInterval(() => {
    seconds_d.style.transform = 'rotate(120deg)';
    time++
}, 1000)