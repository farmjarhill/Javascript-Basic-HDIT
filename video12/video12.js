console.log("Hello world from HTML");
let arrTop4 = ['Man City', 'Liverpool', 'MU', 'Chealsea']; 

// for(let i = 0; i < arrTop4.length; i++) {
//     console.log('Top:',i + 1, arrTop4[i])
// }

// var i = 0; // Khong nen dung let i = 0;
// while(i < arrTop4.length) {
//     console.log('Top:',i + 1, arrTop4[i]);
//     i++;
// }

let i =0;
do {
    console.log('Top:',i + 1, arrTop4[i]);
    i++;
} while (i < arrTop4.length);