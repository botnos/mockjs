import {Mock} from '../src';

const mock = new Mock();

describe('lorem', () => {

    test('should return a word', () => {
        expect(mock.lorem.word.length).toBeGreaterThan(0);
    });

    test('should return an array of three words', () => {
        const words = mock.lorem.words();
        expect(words).toEqual(expect.any(Array));
        expect(words.length).toEqual(3);
    });

    test('should return an array of ten words', () => {
        const words = mock.lorem.words(10);
        expect(words).toEqual(expect.any(Array));
        expect(words.length).toEqual(10);
    });

    test('should return a text with five words', () => {
        const words = mock.lorem.words(5, true);
        expect(words).toEqual(expect.any(String));
        expect(words.toString().split(' ').length).toEqual(5);
    });
});
