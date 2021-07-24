/*let age = "23";

console.log(Number(age));

let a = 23;

console.log(a.toString());

let sentence = "hello world"; //["hello", "there"]

console.log(sentence.split(" "))

let word = ["o", "u", "i"] //oui
console.log(word.join(""))*/

let user = {
    age : 18,
    name : "Emily",
    gender : "f"
}
/*if (user.age >= 18) {
    console.log(`Vous êtes majeur car vous avez ${user.age} ans`)
} else { 
    console.log("Vous êtes mineur car vous avez" + user.age + "ans") 
}*/

// Une seule instruction : on eput enlever les {} :
/*   
 if (user.age >= 18) console.log(`Vous êtes majeur car vous avez ${user.age} ans`)
 else console.log("Vous êtes mineur car vous avez" + user.age + "ans") 
*/
// fonctionne aussi avec les else if et plusieurs conditions


//ternaire quand on a qu'une instruction : 
//user.age <= 18 ? console.log(`Vous êtes majeur car vous avez ${user.age} ans`) : console.log("Vous êtes mineur car vous avez" + user.age + "ans");

/*let date = new Date() // new Date = on instencie un objet de la classe Date -> c'est un objet
let day = date.getDay();
switch (day) {
    case 6:
        console.log("samedi")
        break;
    case 7:
        console.log("dimanche")
        break;
    default:
        console.log("week-end")
}*/

/*class User 
{
    constructor (name, life, strength) 
    {
        this.name = name
        this.life = life
        this.strength = strength
    }
    hit() {
        return this.strength - 5 
    }
}
let john = new User('John', 20, 12);

let users = ["john", "jack", "Daniel"]

for (let item of users) {
    console.log(item)
}

let sayHello = "hello there"
for(let letter of sayHello) {
    console.log(letter)
}*/

/*function add(x, y) {
    return x + y
}
alert(add(6, 7))*/

//let add = (a, b) => a + b

let item = [1, 2, 3, 4, 5];
item.forEach(item => console.log(item * 2)) // function(item) {console.log(item * 2)}
let result = item.map(item => item * 2)
console.log(result.reduce((a, b) => a + b))

let title = document.createElement('hi')
let body = document.body
body.appendChild(title)

// -------  DOM : DOCUMENT OBJECT MODEL ------------

// id = unique et class = peut y en avoir plusieurs (ils permettent d'indentifier la balise)

let text1 = document.getElementsByClassName('text1')

console.log(text1)

text1[0].innerHTML = 'Bonjour' //0 pour accéder à l'élément

let txt = document.querySelector('.txt')
txt.style.display = 'none';

let button = document.getElementsByClassName('button')

button[0].innerHTML = 'Click'
button[0].addEventListener("click", () => {
    txt.style.display = 'block'
})

