console.log('Hello world from HTML');

//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr = [
    { name: 'Thomas', age: 20},
    { name: 'Ling', age: 26},
    { name: 'Monica', age: 24},
    { name: 'Becca', age: 26},
    { name: 'Rose', age: 28},
    
]
// filter
// let result = arr.filter((item, index) => {
//     console.log('>>> Check filter: item:', item, 'index:', index)
//     return item && item.age === 26;
// });
// console.log(result)

// find
let result = arr.find((item, index) => {        // Find chay lan luot tu trai qua phai trong array
    console.log('>>> Check find: item:', item, 'index:', index) 
    return item && item.age === 30;
});
console.log(result)
