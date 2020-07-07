import {IMockData} from './data';
import {getLocaleData} from './locale';
import {IOptions} from '../provider/base';

const localeMap = new Map();

export const getData = (options: IOptions): IMockData => {
    const locale = options.locale;
    if (localeMap.has(locale)) {
        return localeMap.get(locale);
    }
    localeMap.set(locale, getLocaleData(locale));
    return localeMap.get(locale);
};

export const getRandomFromArray = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
