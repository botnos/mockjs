import {IMockData, IMockPerson} from '../lib/data';

export default class implements IMockData {
    person(): IMockPerson {
        return {
            firstNameMale: [
                'Ricardo', 'Jorge', 'Alfredo'
            ],
            firstNameFemale: [
                'Virginia', 'Maria', 'Susana'
            ],
            lastName: [
                'Sanchez', 'Rodriguez'
            ]
        };
    }
}
