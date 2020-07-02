import {Loc, Mock} from '../src';
import {DE_DE, EN_US, ES_ES} from './test-helpers';

const mock = new Mock();

describe('firstName', () => {

    test('should return a valid first name with default params', () => {
        expect([
            ...EN_US.person().firstNameFemale,
            ...EN_US.person().firstNameMale
        ]).toContain(mock.person.firstName);
    });

    test('should return a valid first name  with locale in Mock options', () => {
        const _mock = new Mock(Loc.de_DE);
        expect([
            ...DE_DE.person().firstNameFemale,
            ...DE_DE.person().firstNameMale
        ]).toContain(_mock.person.firstName);
    });

    test('should return a valid first name with options object in Mock', () => {
        const {person} = new Mock({locale: Loc.de_DE});
        expect([
            ...DE_DE.person().firstNameFemale,
            ...DE_DE.person().firstNameMale
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
            ...ES_ES.person().firstNameFemale,
            ...ES_ES.person().firstNameMale
        ]).toContain(mock.locale(Loc.es_ES).person.firstName);
    });

    test('should return only female first names', () => {
        expect(EN_US.person().firstNameFemale).toContain(mock.female().person.firstName);
    });

    test('should return only male first names', () => {
        expect(EN_US.person().firstNameMale).toContain(mock.male().person.firstName);
    });
});
