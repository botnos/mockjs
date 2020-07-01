import {PersonProvider} from '../providers/person';
import {LoremProvider} from '../providers/lorem';
import {Loc} from './locale';

export interface IMockOptions {
    locale: Loc;
    tempLocale?: Loc;
}

export class Mock {
    private readonly options: IMockOptions = {
        locale: Loc.en
    };

    constructor(options?: Loc | IMockOptions) {
        if (options !== undefined) {
            if (typeof options === 'string') {
                this.options.locale = options;
            } else if (typeof options === 'object') {
                this.options = options;
            }
        }
    }

    locale(locale?: Loc) {
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
