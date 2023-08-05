console.log('Hello world from HTML');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i];  
// }

let mapArr = arr.map((item, index) => {
    item = item * item;
    return item;
})

console.log('Check value arr:', arr);
console.log('Check value mapArr:', mapArr);

// => Hàm for sẽ modify trực tiếp vào mảng ban đầu, còn hàm map sẽ tạo một mảng dữ liệu mới không liên quan đến mảng ban đầu.
// Việc dùng map sẽ khiến cho mảng dữ liệu ban đầu an toàn và không bị thay thế.

let map2Arr = arr.map((item, index) => {
    return (
        `<td>${item} - ${index}</td>`
    )
})
console.log('Check value map2Arr:', map2Arr);