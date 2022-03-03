'use strict';

//lesson 2
console.log("\n lesson 2 ------------\n");
let num = 266219;

//multiply all numbers in num
let newNum = num.toString();
let multply = newNum[0];
for (let i = 0; i < newNum.length-1; i++) {
    multply *= newNum[i+1];
}
console.log(multply);

multply = multply**3;
//show in console first 2 numbers of multply
console.log(Math.trunc(multply / (10**8)));

//lesson 3

console.log("\n lesson 3 ------------\n");

//task 1
let lang = "ru";

//via if..else
if (lang == "ru") {
    console.log("понедельник");
    console.log("вторник");
    console.log("среда");
    console.log("четверг");
    console.log("пятница");
    console.log("суббота");
    console.log("воскресенье");
} else if (lang == "en") {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else {
    console.log("I do not speak", lang);
}

//via switch
switch (lang) {
    case "ru":
        console.log("понедельник, вторник, среда, четверг, пятница, суббота и воскресенье");
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    default:
        console.log("I do not speak", lang);
}

//via array without if...else or switch

let langArr = [["понедельник, вторник, среда, четверг, пятница, суббота и воскресенье"], 
               ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]];
lang == "ru" ? console.log(langArr[0]) : 
        lang == "en" ? console.log(langArr[1]) : console.log("I do not speak", lang);

//task 2
let namePerson= "Zoe";
namePerson == "Leon" ? console.log("director") : 
        namePerson == "Alex"? console.log("teacher") : console.log("student");

//lesson 4

console.log("\n lesson 4 ------------\n");

//check for string and cut with ... if > 30 symbols
const line = function(smthing) {
    if (typeof smthing !== ("string")) {
        alert("Variable is not a string");
    } else {
        smthing = smthing.trim();
        if (smthing.length > 30) {
            console.log(smthing.substring(0, 30) + "...");
        } else {
            console.log(smthing);
        }
    }
};

line(" jjjjjjjjjjjjjjjjjjjjjjjjjjjjj j ");

//lesson 5

console.log("\n lesson 5 ------------\n");

//task 1
let arr = ["235", "362", "2", "146", "48567", "236", "8975"];

//console all numbers from array that starts with 2 and 4
for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) == 2 || arr[i].charAt(0) == 4) {
        console.log(arr[i]);
    }   
}

//using .filter()

let arr2 = ["125", "289", "3456", "489", "232", "6", "48956"];

const newArr = arr2.filter(number => number.charAt(0) == 2 || number.charAt(0) == 4);
console.log(newArr);

console.log("\n ------------\n");
//task 2

//find prime numbers and console their factors
for  (let i = 2; i < 101; i++) {
    if (i !== 2 && i % 2 === 0) {continue;}     
    if (i !== 3 && i % 3 === 0) {continue;} 
    if (i !== 5 && i % 5 === 0) {continue;}
    if (i !== 7 && i % 7 === 0) {continue;} 

    for(let j = 2; j < 101; j++) {
    
        if(i % j === 0) {
        console.log("Делителями числа", i, "являются 1 и", j);
        }
    }
}

//lesson 16

console.log("\n lesson 16 ------------\n");

class First {
    constructor() {
    }

    hello() {
        console.log(`Привет я метод родителя!`);
    }    
}

class Second extends First {

    hello() {
        // First.prototype.hello();
        super.hello();
        console.log(`А я наследуемый метод!`);
    }
}

const second2 = new Second();
second2.hello();

//lesson 19

console.log("\n lesson 19 ------------\n");

const input = document.querySelector("input");
const text = document.querySelector("p");

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const enterText = () => {
    text.textContent = input.value;
};    

input.addEventListener("input", debounce(() => enterText()));