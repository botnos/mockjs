import {Mock} from './mock';

const mock = new Mock('en');

console.log('First:', mock.person.firstName);

console.log('First:', mock.locale('de').person.firstName);

console.log('First:', mock.person.firstName);

const mockEs = new Mock('es');

console.log('First:', mockEs.person.firstName);
console.log('First:', mockEs.person.firstName);
console.log('First:', mockEs.person.firstName);


// console.log('person', Mock.person.firstName);
// // Mock.locale('es');
//
// console.log('person', Mock.person.firstName);
// // console.log(`Maine name ist ${person.firstName}`);
// console.log('person', Mock.person.firstName);
// console.log('person', Mock.person.firstName);
// // console.log('Mi nombre es ', person.firstName);
// // console.log('person', Mock.person('de').firstName);
// console.log('person', Mock.person.firstName);

