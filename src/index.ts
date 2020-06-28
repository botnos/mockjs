import { locale, person } from './mod';

console.log('person', person.firstName());
locale('de');
console.log('person', person.firstName());
locale('es');
console.log('person', person.firstName());

console.log(`My name is ${person.firstName('de')}`);
