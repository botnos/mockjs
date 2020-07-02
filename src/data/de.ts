import {IMockAddress, IMockData, IMockPerson} from '../lib/data';

export default class implements IMockData {

    person(): IMockPerson {
        return {
            firstNameMale: [
                'Wolfgang', 'Olaf', 'Johan'
            ],
            firstNameFemale: [
                'Petra', 'Hilde'
            ],
            lastName: [
                'Maier', 'Schmidt'
            ]
        };
    }

    address(): IMockAddress {
        return {
            state: []
        };
    }
}
