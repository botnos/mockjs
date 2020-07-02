import {Loc, Mock} from '../src';
import {DE_DE, EN_US} from './test-helpers';

const mock = new Mock();

describe('address', () => {

    test('should return a valid state', () => {
        expect(EN_US.address().state).toContain(mock.address.state);
    });

    test('should return a valid state  with locale in Mock options', () => {
        const _mock = new Mock(Loc.de_DE);
        expect(DE_DE.address().state).toContain(_mock.address.state);
    });
});
