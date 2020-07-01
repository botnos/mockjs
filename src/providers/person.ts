import {IMockOptions} from '..';
import {getData, getRandomFromArray} from '../lib/utils';
import {BaseProvider} from './base';
import {IMockPerson} from '../lib/data';

export class PersonProvider extends BaseProvider {

    private person: IMockPerson;

    constructor(options: IMockOptions) {
        super(options);
        this.person = getData(options).person();
    }

    get firstName() {
        return getRandomFromArray([
            ...this.person.firstNameFemale,
            ...this.person.firstNameMale
        ]);
    }
}
