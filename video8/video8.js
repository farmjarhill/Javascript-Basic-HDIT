console.log('Hello world from HTML')

// key value and  // Define Object
let obj = {
    name: 'Thomas',
    address: 'Hanoi',
    email: 'pghaothuat@gmail.com',
    gender: '',
    a: function(){
        console.log(`Hello world inside function`)
        return ''
    }
}; 
let b = 'name'
//obj[b] = 'Harry'
obj.name = 'Ali'

let d = 'address'
//obj[d] = 'HCM'
obj.address = 'HCM'

console.log('What is your name?', 'My name is:', obj.name)          
console.log('What is your name?', 'My name is:', obj['name'], obj)

console.log('Where are you from?', `I'm from:`, obj.address)
console.log('Where are you from?', `I'm from:`, obj['address'])


console.log('What is your email?', `My email is:`, obj.email)
console.log(`Call function:`, obj.a())

JSON
"{name: 'Eric', address: 'Hanoi'}"

//let b = 'Eric';
let c = ''
console.log('type of a:', typeof a, 'type of b:', typeof b, 'type of c:', typeof c)


