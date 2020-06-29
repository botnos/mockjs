import {PersonProvider} from './providers/person';
import {LOCALE} from "./locales/codes";

export interface IMockProps {
    locale: LOCALE,
    tempLocale?: LOCALE
}

export class Mock {
    private props: IMockProps = {
        locale: LOCALE.EN
    }

    constructor(locale?: LOCALE) {
        if (locale !== undefined) {
            this.props.locale = locale;
        }
    }

    locale(locale?: LOCALE) {
        if (locale !== undefined) {
            this.props.tempLocale = locale;
        }
        return this;
    }

    get person() {
        return new PersonProvider(this.props);
    }
}

export const LOC = LOCALE;
