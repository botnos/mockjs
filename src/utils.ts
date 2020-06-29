import {IMockProps} from "./mock";

export const getLocaleFromProps = (props: IMockProps) => {
    if (props.tempLocale) {
        const loc = props.tempLocale;
        props.tempLocale = undefined;
        return loc;
    }
    return props.locale;
}

let localeMap = new Map();

export const getStrings = (props: IMockProps, type: string) => {
    const locale = getLocaleFromProps(props);
    if (localeMap.has(locale)) {
        return localeMap.get(locale);
    }
    localeMap.set(locale, require(`./locales/${locale}/${type}`).default);
    return localeMap.get(locale);
}

export const getRandomFromArray = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const getString = (props: IMockProps, fieldName: string) => {
    return getRandomFromArray(getStrings(props, fieldName));
}
