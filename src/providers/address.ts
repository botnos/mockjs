import {IMockOptions} from '../mock';
import {getData, getRandomFromArray} from '../lib/utils';
import {BaseProvider} from './base';
import {IMockAddress} from '../lib/data';

export class AddressProvider extends BaseProvider {

    private address: IMockAddress;

    constructor(options: IMockOptions, tempOptions: IMockOptions) {
        super(options, tempOptions);
        this.address = getData(options, tempOptions).address();
    }

    get state(): string {
        return getRandomFromArray(this.address.state);
    }
}
