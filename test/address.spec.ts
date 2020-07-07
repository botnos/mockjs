import {MockJs} from '../src';
import {getLocaleData, Loc} from '../src/lib/locale';

const mock = new MockJs();
const EN_US = getLocaleData(Loc.en_US);
const DE_DE = getLocaleData(Loc.de_DE);

describe('address', () => {

    test('should return a valid state', () => {
        expect(EN_US.address().state).toContain(mock.state);
    });

    test('should return a valid state  with locale in Mock options', () => {
        const _mock = new MockJs(Loc.de_DE);
        expect(DE_DE.address().state).toContain(_mock.state);
    });
});
