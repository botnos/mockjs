import {IMockOptions} from '..';
import {getData, getGenderFromOptions, getRandomFromArray} from '../lib/utils';
import {BaseProvider} from './base';
import {IMockPerson} from '../lib/data';
import {Gender} from '../lib/gender';

export class PersonProvider extends BaseProvider {

    private person: IMockPerson;

    constructor(options: IMockOptions, tempOptions: IMockOptions) {
        super(options, tempOptions);
        this.person = getData(options, tempOptions).person();
    }

    get firstName() {

        const gender = getGenderFromOptions(this.options, this.tempOptions);

        if (gender !== undefined) {
            if (gender === Gender.F) {
                return getRandomFromArray(this.person.firstNameFemale);
            }
            if (gender === Gender.M) {
                return getRandomFromArray(this.person.firstNameMale);
            }
        }

        return getRandomFromArray([
            ...this.person.firstNameFemale,
            ...this.person.firstNameMale
        ]);
    }

    get lastName() {
        return getRandomFromArray(this.person.lastName);
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get card() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
        };
    }
}
