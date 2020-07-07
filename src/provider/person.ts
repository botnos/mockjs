import {BaseProvider, Constructable} from './base';
import {getData, getRandomFromArray} from '../lib/utils';
import {Gender} from '../lib/gender';

export const Person = <T extends Constructable<BaseProvider>>(base: T) => {
    return class extends base {

        // tslint:disable-next-line:variable-name
        private __person = Symbol('person');

        constructor(...args: any[]) {
            super(...args);
            this[this.__person] = getData(this.options).person();
        }

        get firstName(): string {
            const gender = this.options.gender;
            if (gender === Gender.F) {
                this.result = getRandomFromArray(this[this.__person].firstNameFemale);
            } else if (gender === Gender.M) {
                this.result = getRandomFromArray(this[this.__person].firstNameMale);
            } else {
                this.result = getRandomFromArray([
                    ...this[this.__person].firstNameFemale,
                    ...this[this.__person].firstNameMale
                ]);
            }
            return this.process();
        }

        get lastName(): string {
            this.result = getRandomFromArray(this[this.__person].lastName);
            return this.process();
        }

        get name(): string {
            return this.fullName;
        }

        get fullName(): string {
            this.result = `${this.firstName} ${this.lastName}`;
            return this.process();
        }

        get person(): object {
            return {
                firstName: this.firstName,
                lastName: this.lastName,
            };
        }
    };
};

