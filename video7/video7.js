console.log('Hello world from HTML')

// const a = 5;
// const b = 10;
// console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// console.log("Fifteen is " + a + b + " and not " + 2 * a + b + "."); 
// // "Fifteen is 15 and
// // not 20."

// => Template string:
const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and   
not ${2 * a + b}.`); //dùng dấu đô la gạch chéo để nói cho máy biết là một biến
// "Fifteen is 15 and
// not 20."


//url: '/hoidanit/5'
console.log(`Hoi dan IT check strings: a = ${a} va b = ${b}, a + b = ${a + b}`);
console.log(`/hoidanit/${a}`);