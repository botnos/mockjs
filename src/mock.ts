let _locale = 'en';

const locale = (loc) => {
    _locale = loc;
}

export const mock = {
    get person() {
        return require('./providers/person').personProvider;
    },

    locale(loc) {
        locale(loc);
    }
}

export const getLocale = (locale?: string | undefined) => {
    return (locale) ? locale : _locale;
}

/**
 * Shorthand helpers
 */
export const person = mock.person;
