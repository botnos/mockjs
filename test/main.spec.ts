import {Mock} from '../src/mock';
import firstNamesEn from '../src/locales/en/first_name';

const mock = new Mock();

test('should return a valid first names', () => {
    expect(firstNamesEn).toContain(mock.person.firstName);
});
