import {PersonProvider} from '../providers/person';
import {LoremProvider} from '../providers/lorem';
import {LOC} from './locale';

export interface IMockOptions {
    locale: LOC,
    tempLocale?: LOC
}

export class Mock {
    private readonly options: IMockOptions = {
        locale: LOC.EN
    }

    constructor(options?: LOC | IMockOptions) {
        if (options !== undefined) {
            if (typeof options === 'string') {
                this.options.locale = options;
            } else if (typeof options === 'object') {
                this.options = options;
            }
        }
    }

    locale(locale?: LOC) {
        if (locale !== undefined) {
            this.options.tempLocale = locale;
        }
        return this;
    }

    get person() {
        return new PersonProvider(this.options);
    }

    get lorem() {
        return new LoremProvider(this.options);
    }
}
