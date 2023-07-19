console.log("Hello world from HTML");

let a = 5; // x <- y
let b = "5";
console.log("Compare a == b:", "a =", a, "b =", b, "result:", a == b); // Khi dùng hai dấu bằng, toán tử cộng sẽ convert string thành number nên '5' sẽ thành 5
console.log("Compare a === b:", "a =", a, "b =", b, "result:", a === b); // Còn khi dùng 3 dấu bằng, toán tử cộng sẽ giữ nguyên datatype của biến, '5' vẫn là '5'
// => Phải dùng === để tăng tính chính xác.

// === type, value
// == value

// Empty, null, undefined
let c; // undefined
console.log("Check value:", c, "Type of c:", typeof c);

let d = {};
console.log("Check value:", d, "Type of d:", typeof d);

let e = null; // null
console.log("Check value:", e, "Type of c:", typeof e);

let f = "";
console.log("Check value:", f, "Type of c:", typeof f);
