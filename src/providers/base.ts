import {IMockOptions} from '..';

export abstract class BaseProvider {
    protected options;

    protected constructor(options: IMockOptions) {
        this.options = options;
    }
}
