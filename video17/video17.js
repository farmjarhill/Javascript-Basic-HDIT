console.log('Hello world from HTML');

function math(x, y) {
    if (x == 1 & y == 2) {
        // console.log('Multiply x and y:', x * y);
        return x * y;
    } else {
        return x + y;
    }
}
console.log('Check sum:', math(2, 2))
console.log('Check multiply:', math(1, 2))

function sum(a, b, i){ 
    console.log('1');
    console.log('2');
    console.log('3');
    if (i === 5) return;
    console.log('4');
    console.log('5');
    return a + b;
}
console.log('Check sum:', sum(9, 6, 5))

// Thoat Function luon luon dung return