import {person} from '../src/mock';
import firstNamesEn from '../src/locales/en/first_name';

test('should return a valid first names', () => {
    expect(firstNamesEn).toContain(person.firstName());
});
