import {getRandomFromArray, getStrings} from "../utils";
import {getLocale} from "../mock";

/**
 * A Person object
 *
 * @type {{firstName(locale: string): any}}
 */
export const personProvider = {
    /**
     * First name
     *
     * @param {string} locale
     * @returns {any}
     */
    firstName(locale?: string): any {
        const arr = getStrings(getLocale(locale), 'first_name');
        return getRandomFromArray(arr);
    }
}
