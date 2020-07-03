import ES_ES from '../data/es_ES';
import EN_US from '../data/en_US';
import DE_DE from '../data/de_DE';

export enum Loc {
    es_ES = 'es_ES',
    en_US = 'en_US',
    de_DE = 'de_DE',
}

export const getLocaleData = (loc: Loc | undefined) => {
    if (loc === undefined) {
        loc = Loc.en_US;
    }
    switch (loc) {
        case Loc.es_ES:
            return new ES_ES();
        case Loc.en_US:
            return new EN_US();
        case Loc.de_DE:
            return new DE_DE();
    }
};
