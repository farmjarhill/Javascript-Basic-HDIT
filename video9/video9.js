console.log("Hello world form HTML");

let a = {
  name: "Eric",
  age: "25",
};
console.log("Check data Object:", a);
console.log("My name's:", a.name);

// array = [item1, item2, item3]
let b = ["MU", "Chelsea", "Liver"]; // Array khác Object ở chỗ Array quản lí các phần tử biến thông qua index, còn Object là thông qua key value chứ bản chất cả Array và Object đều là Object
console.log("type of b:", typeof b, b);
console.log("First item:", b[0], "Second item:", b[1], "Third item:", b[2]);

let family = [
  { name: "Eric", age: "25" },
  { name: "Monica", age: "24" },
];
console.log('My family:', family)
console.log('Husband info:', family[0])
console.log('Wife info:', family[1])
