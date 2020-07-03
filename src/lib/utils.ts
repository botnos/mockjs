import {IMockOptions} from './mock';
import {IMockData} from './data';
import {getLocaleData, Loc} from './locale';
import {Gender} from './gender';

const localeMap = new Map();

export const getData = (options: IMockOptions, tempOptions: IMockOptions): IMockData => {
    const locale = getLocaleFromOptions(options, tempOptions);
    if (localeMap.has(locale)) {
        return localeMap.get(locale);
    }
    localeMap.set(locale, getLocaleData(locale));
    return localeMap.get(locale);
};

export const getLocaleFromOptions = (options: IMockOptions, tempOptions: IMockOptions): Loc | undefined => {
    if (tempOptions.locale !== undefined) {
        const loc = tempOptions.locale;
        tempOptions.locale = undefined;
        return loc;
    }
    return options.locale;
};

export const getGenderFromOptions = (options: IMockOptions, tempOptions: IMockOptions): Gender | undefined => {
    if (tempOptions.gender !== Gender.U) {
        const gender = tempOptions.gender;
        tempOptions.gender = Gender.U;
        return gender;
    }
    return options.gender;
};

export const getRandomFromArray = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
