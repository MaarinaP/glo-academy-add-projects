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

//задача 1
let lang = "en";

//через if
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
    console.log("Я не говорю на этом языке");
}

//через switch
switch (lang) {
    case "ru":
        console.log("понедельник, вторник, среда, четверг, пятница, суббота и воскресенье");
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    default:
        console.log("Я не говорю на этом языке");
}

// через многомерный массив без ифов и switch
let langArr = [["понедельник, вторник, среда, четверг, пятница, суббота и воскресенье"], ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]];
lang == "ru" ? console.log(langArr[0]) : lang == "en" ? console.log(langArr[1]) : console.log("Я не говорю на этом языке");

//задача 2
let namePerson= "Артем";
namePerson == "Артем" ? console.log("директор") : namePerson == "Александр"? console.log("преподаватель") : console.log("студент");
