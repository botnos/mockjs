import {Person} from './providers/person';

export interface IMockProps {
    locale: string,
    tempLocale?: string
}

export class Mock {
    private props: IMockProps = {
        locale: 'en'
    }

    constructor(locale?: string) {
        if (locale !== undefined) {
            this.props.locale = locale;
        }
    }

    locale(locale?: string) {
        if (locale !== undefined) {
            this.props.tempLocale = locale;
        }
        return this;
    }

    get person() {
        return new Person(this.props);
    }
}

/**
 * Shorthand helpers
 */
// export const person = new Person();
