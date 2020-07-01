import {IMockOptions} from '..';

export abstract class BaseProvider {
    protected options;
    protected tempOptions;

    constructor(options: IMockOptions, tempOptions?: IMockOptions) {
        this.options = options;
        if (tempOptions) {
            this.tempOptions = tempOptions;
        }
    }
}
