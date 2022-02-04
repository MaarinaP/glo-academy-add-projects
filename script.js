'use strict';

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