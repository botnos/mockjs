import {IMockOptions} from './mock';
import {IMockData} from './data';

const localeMap = new Map();

export const getData = (options: IMockOptions): IMockData => {
    const locale = getLocaleFromOptions(options);
    if (localeMap.has(locale)) {
        return localeMap.get(locale);
    }
    const Data = require(`../data/${locale}`).default;
    localeMap.set(locale, new Data());
    return localeMap.get(locale);
};

export const getLocaleFromOptions = (options: IMockOptions) => {
    if (options.tempLocale) {
        const loc = options.tempLocale;
        options.tempLocale = undefined;
        return loc;
    }
    return options.locale;
};

export const getRandomFromArray = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
