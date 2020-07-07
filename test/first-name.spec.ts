import {MockJs} from '../src';
import {getLocaleData, Loc} from '../src/lib/locale';

const mock = new MockJs();
const ES_ES = getLocaleData(Loc.es_ES);
const EN_US = getLocaleData(Loc.en_US);
const DE_DE = getLocaleData(Loc.de_DE);


describe('firstName', () => {

    test('should return a valid first name with default params', () => {
        expect([
            ...EN_US.person().firstNameFemale,
            ...EN_US.person().firstNameMale
        ]).toContain(mock.firstName);
    });

    test('should return a valid first name  with locale in Mock options', () => {
        const _mock = new MockJs(Loc.de_DE);
        expect([
            ...DE_DE.person().firstNameFemale,
            ...DE_DE.person().firstNameMale
        ]).toContain(_mock.firstName);
    });

    test('should return a valid first name with options object in Mock', () => {
        const {firstName} = new MockJs({locale: Loc.es_ES});
        expect([
            ...ES_ES.person().firstNameFemale,
            ...ES_ES.person().firstNameMale
        ]).toContain(firstName);
    });

    test('should return a valid first name with sub locale', () => {
        const {firstName} = new MockJs({locale: Loc.de_DE});
        expect([
            ...DE_DE.person().firstNameFemale,
            ...DE_DE.person().firstNameMale
        ]).toContain(firstName);
    });

    test('should return only female first names', () => {
        expect(EN_US.person().firstNameFemale).toContain(mock.female.firstName);
    });

    test('should return only male first names', () => {
        expect(EN_US.person().firstNameMale).toContain(mock.male.firstName);
    });
});
