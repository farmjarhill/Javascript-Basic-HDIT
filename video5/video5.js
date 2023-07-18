console.log('Hello world from HTML')

let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(txt.length)
console.log(txt.slice(5, 20))
console.log(txt.substring(5, 20))   // no negative indexes.
console.log(txt.substr(5, 20))

let text = "     Please visit Microsoft    ";
console.log(text.replace("Microsoft", "Apple"))
console.log(text.toUpperCase())
console.log(text.trim())  // loại bỏ khoảng trắng
console.log(text.split(""))

let a = '1$2$3$4$5' // => 1, 2, 3, 4, 5
console.log(a.split(''))
console.log(a.split('$'))



