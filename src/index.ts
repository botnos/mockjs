import {LOC, Mock} from './mock';

console.time();
const mock = new Mock(LOC.EN);

console.log('First:', mock.person.firstName);

console.log('First:', mock.locale(LOC.DE).person.firstName);

console.log('First:', mock.person.firstName);

// benchmarking
// for (let i = 0; i < 10000000; i++) {
//     mock.person.firstName;
// }

const {person} = new Mock(LOC.DE);
console.log(`Ich heisse ${person.firstName}`);
console.timeEnd();


