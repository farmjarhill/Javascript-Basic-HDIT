console.log('Hello world from HTML');

sum = (a,b) => {
    return a + b;
}

console.log('Check sum:', sum(9, 6))

// function vs method => reuse

let obj = {
    name: 'Gia Hien',
    address: 'Hanoi',
    getName: function(){
        return this.name;
    }
}

console.log('Get name obj:', obj.getName())  // => Day la method, ban chat van la Function, nam trong class thi goi no la method, muon goi method thi dung 'this.'
console.log('Get name obj:', obj.name) // Day khong phai method