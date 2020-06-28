let _locale = 'en';

export const locale = (loc) => {
    _locale = loc;
}

/**
 * A Person object
 *
 * @type {{firstName(locale: string): any}}
 */
export const person = {
    /**
     * First name
     *
     * @param {string} locale
     * @returns {any}
     */
    firstName(locale?: string): any {
        const arr = getStrings(getLocale(locale), 'first_name');
        return getRandomFromArray(arr);
        // getLocaleStrings(getLocale(locale), 'first_name')
        //     .then(strings => {
        //         console.log(strings[0]);
        //         return strings[0] || '';
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     });
    }
}

function getLocale(locale: string | undefined) {
    return (locale) ? locale : _locale;
}

// async function getLocaleStrings(locale: string, type: string) {
//     return await import(`./locales/${locale}/${type}.json`);
// }

function getStrings(locale: string, type: string) {
    return require(`./locales/${locale}/${type}.json`);
}

function getRandomFromArray(arr: any) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// export const company = () => {
//     return _locale;
// }
