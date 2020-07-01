import {Loc, Mock} from '../src';
import _EN from '../src/data/en';
import _DE from '../src/data/de';
import _DE_DE from '../src/data/de_DE';
import _ES from '../src/data/es';

const mock = new Mock();

describe('firstName', () => {

    const EN = new _EN();
    const DE = new _DE();
    const DE_DE = new _DE_DE();
    const ES = new _ES();

    test('should return a valid first name with default params', () => {
        expect([
            ...EN.person().firstNameFemale,
            ...EN.person().firstNameMale
        ]).toContain(mock.person.firstName);
    });

    test('should return a valid first name  with locale in Mock options', () => {
        const _mock = new Mock(Loc.de);
        expect([
            ...DE.person().firstNameFemale,
            ...DE.person().firstNameMale
        ]).toContain(_mock.person.firstName);
    });

    test('should return a valid first name with options object in Mock', () => {
        const {person} = new Mock({locale: Loc.de});
        expect([
            ...DE.person().firstNameFemale,
            ...DE.person().firstNameMale
        ]).toContain(person.firstName);
    });

    test('should return a valid first name with sub locale', () => {
        const {person} = new Mock({locale: Loc.de_DE});
        expect([
            ...DE_DE.person().firstNameFemale,
            ...DE_DE.person().firstNameMale
        ]).toContain(person.firstName);
    });

    test('should return a valid first name with chained API', () => {
        expect([
            ...ES.person().firstNameFemale,
            ...ES.person().firstNameMale
        ]).toContain(mock.locale(Loc.es).person.firstName);
    });

    test('should return only female first names', () => {
        expect(EN.person().firstNameFemale).toContain(mock.female().person.firstName);
    });

    test('should return only male first names', () => {
        expect(EN.person().firstNameMale).toContain(mock.male().person.firstName);
    });
});
