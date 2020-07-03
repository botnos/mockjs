import {IMockOptions} from '../mock';
import {Gender} from '../lib/gender';

export abstract class BaseProvider {
    protected options;
    protected tempOptions;

    constructor(options: IMockOptions, tempOptions?: IMockOptions) {
        this.options = options;
        if (tempOptions) {
            this.tempOptions = tempOptions;
        }
    }

    get female() {
        this.tempOptions.gender = Gender.F;
        return this;
    }

    get male() {
        this.tempOptions.gender = Gender.M;
        return this;
    }
}
