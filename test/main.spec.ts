import { person } from '../src/mod';
import firstNamesEn from '../src/locales/en/first_name';

test('should return a valid first name', () => {
    expect(firstNamesEn).toContain(person.firstName());
});

