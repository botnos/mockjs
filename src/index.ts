import {mock} from './mock';

console.log('Person:', mock.person.firstName());
mock.locale('de');
console.log('person', mock.person.firstName());
mock.locale('es');
console.log('person', mock.person.firstName());

console.log(`My name is ${mock.person.firstName('de')}`);
