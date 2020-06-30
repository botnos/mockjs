import {PersonProvider} from '../providers/person';
import {LOC} from "../strings/locale";

export interface IMockProps {
    locale: LOC,
    tempLocale?: LOC
}

export class Mock {
    private readonly props: IMockProps = {
        locale: LOC.EN
    }

    constructor(options?: LOC | IMockProps) {
        if (options !== undefined) {
            if (typeof options === 'string') {
                this.props.locale = options;
            } else if (typeof options === 'object') {
                this.props = options;
            }
        }
    }

    locale(locale?: LOC) {
        if (locale !== undefined) {
            this.props.tempLocale = locale;
        }
        return this;
    }

    get person() {
        return new PersonProvider(this.props);
    }
}
