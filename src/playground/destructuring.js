// const person = {
//     name: 'Andrew',
//     age: 30,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name, age } = person;
// console.log(`${name} is ${age}`);

// const { city = 'Belgrade', temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName) //default Self-Published


const address = ['1229 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ street, city, state = 'New York', zip ] = address; 

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffee, , price] = item;

console.log(`A medium ${coffee} costs ${price}`);