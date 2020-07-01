import {IMockOptions} from './mock';

export const getLocaleFromProps = (props: IMockOptions) => {
    if (props.tempLocale) {
        const loc = props.tempLocale;
        props.tempLocale = undefined;
        return loc;
    }
    return props.locale;
};

const localeMap = new Map();

export const getStrings = (props: IMockOptions, type: string) => {
    const locale = getLocaleFromProps(props);
    if (localeMap.has(locale)) {
        return localeMap.get(locale);
    }
    localeMap.set(locale, require(`../data/${locale}/${type}`).default);
    return localeMap.get(locale);
};

export const getRandomFromArray = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export const getString = (props: IMockOptions, fieldName: string) => {
    return getRandomFromArray(getStrings(props, fieldName));
};
