import {Loc, Mock} from '../src/mock';
import {getLocaleData} from '../src/lib/locale';

const mock = new Mock();
const EN_US = getLocaleData(Loc.en_US);
const DE_DE = getLocaleData(Loc.de_DE);

describe('address', () => {

    test('should return a valid state', () => {
        expect(EN_US.address().state).toContain(mock.address.state);
    });

    test('should return a valid state  with locale in Mock options', () => {
        const _mock = new Mock(Loc.de_DE);
        expect(DE_DE.address().state).toContain(_mock.address.state);
    });
});
