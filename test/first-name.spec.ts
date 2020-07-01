import {Loc, Mock} from '../src';
import firstNamesEn from '../src/data/en/first_name';
import firstNamesDe from '../src/data/de/first_name';
import firstNamesEs from '../src/data/es/first_name';

const mock = new Mock();

describe('firstName', () => {

    test('should return a valid first name with default params', () => {
        expect(firstNamesEn).toContain(mock.person.firstName);
    });

    test('should return a valid first name  with locale in Mock options', () => {
        const _mock = new Mock(Loc.de);
        expect(firstNamesDe).toContain(_mock.person.firstName);
    });

    test('should return a valid first name with options object in Mock', () => {
        const {person} = new Mock({locale: Loc.de});
        expect(firstNamesDe).toContain(person.firstName);
    });

    test('should return a valid first name with chained API', () => {
        expect(firstNamesEs).toContain(mock.locale(Loc.es).person.firstName);
    });
});
