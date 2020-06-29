/**
 *
 * @param {string} locale
 * @param {string} type
 * @returns {any}
 */
export const getStrings = (locale: string, type: string) => {
    return require(`./locales/${locale}/${type}`).default;
}

/**
 *
 * @param arr
 * @returns {any}
 */
export const getRandomFromArray = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
}
