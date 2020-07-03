import {PersonProvider} from '../providers/person';
import {LoremProvider} from '../providers/lorem';
import {Loc} from './locale';
import {Gender} from './gender';
import {AddressProvider} from '../providers/address';

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
        locale: Loc.en_US,
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

    //
    //  Providers registration
    //

    get person() {
        return new PersonProvider(this.options, this.tempOptions);
    }

    get address() {
        return new AddressProvider(this.options, this.tempOptions);
    }

    get lorem() {
        return new LoremProvider(this.options, this.tempOptions);
    }
}
