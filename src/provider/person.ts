import {BaseProvider, Constructable} from '../lib/base';
import {getData, getRandomFromArray} from '../lib/utils';
import {Gender} from '../lib/gender';
import {IMockPerson} from '../lib/data';

export const Person = <T extends Constructable<BaseProvider>>(base: T) => {
    return class extends base {
        #people: IMockPerson;

        constructor(...args: any[]) {
            super(...args);
            this.#people = getData(this.options).person();
        }

        get firstName(): string {
            const gender = this.options.gender;
            if (gender === Gender.F) {
                this.result = getRandomFromArray(this.#people.firstNameFemale);
            } else if (gender === Gender.M) {
                this.result = getRandomFromArray(this.#people.firstNameMale);
            } else {
                this.result = getRandomFromArray([
                    ...this.#people.firstNameFemale,
                    ...this.#people.firstNameMale
                ]);
            }
            return this.process();
        }

        get lastName(): string {
            this.result = getRandomFromArray(this.#people.lastName);
            return this.process();
        }

        get name(): string {
            return this.fullName;
        }

        get fullName(): string {
            this.delayProcess = true;
            this.result = `${this.firstName} ${this.lastName}`;
            this.delayProcess = false;
            return this.process();
        }

        get person(): object {
            this.delayProcess = true;
            this.result = {
                firstName: this.firstName,
                lastName: this.lastName,
            };
            this.delayProcess = false;
            return this.process();
        }
    };
};

