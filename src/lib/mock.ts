import {PersonProvider} from '../providers/person';
import {LoremProvider} from '../providers/lorem';
import {Loc} from './locale';
import {Gender} from './gender';

export interface IMockOptions {
    locale: Loc | undefined;
    gender?: Gender;
}

export class Mock {

    private readonly tempOptions: IMockOptions = {
        locale: undefined,
        gender: Gender.U,
    };

    private readonly options: IMockOptions = {
        locale: Loc.en,
        gender: Gender.U,
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
            this.tempOptions.locale = locale;
        }
        return this;
    }

    female() {
        this.tempOptions.gender = Gender.F;
        return this;
    }

    male() {
        this.tempOptions.gender = Gender.M;
        return this;
    }

    //
    //  Providers registration
    //

    get person() {
        return new PersonProvider(this.options, this.tempOptions);
    }

    get lorem() {
        return new LoremProvider(this.options, this.tempOptions);
    }
}
