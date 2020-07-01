import DE from './de';
import {IMockPerson} from '../lib/data';

export default class extends DE {
    get person(): IMockPerson {
        return {
            firstNameMale: [
                ...super.person.firstNameMale,
                'Helmut'
            ],
            firstNameFemale: super.person.firstNameFemale,
            lastName: super.person.lastName
        };
    }
}
