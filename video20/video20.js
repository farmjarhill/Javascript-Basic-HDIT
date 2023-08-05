console.log('Hello world from HTML');

// *CALLBACK
// let sum = (a, b, callback) => {
//     let tong = a + b;
//     callback(tong);
// }


// let printSum = (message) => {
//     console.log('Check sum: 9 + 6 =', message);
// }

// sum(6, 9, printSum)

// *SETTIMEOUT
// let sum = (a, b, callback) => {
//     let tong = a + b;
//     setTimeout(() => {
//         callback(tong);
//     }, 5000);  // 5000 millisecond = 5 second delay

// }


// let printSum = (message) => {
//     console.log('>>>Check sum: 9 + 6 =', message);
// }

// sum(6, 9, printSum)

// * SETINTERVAL
let sum = (a, b, callback) => {
    let tong = a + b;
    let i = 0;
    let timer = setInterval(() => {
        callback(tong);
        i++;
        if (i === 5) {
            clearInterval(timer);
        }
    }, 1000);

    console.log('>>>Check i:', i)
}

let printSum = (message) => {
    console.log('>>>Check sum: 9 + 6 =', message);
}

sum(6, 9, printSum)