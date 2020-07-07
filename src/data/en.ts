import {IMockAddress, IMockData, IMockPerson} from '../lib/data';

export default class implements IMockData {

    person(): IMockPerson {
        return {
            firstNameMale: [
                'Peter', 'Paul', 'Roger', 'Jon'
            ],
            firstNameFemale: [
                'Martha', 'Susan'
            ],
            lastName: [
                'Peters', 'Rogers', 'Robinson'
            ]
        };
    }

    address(): IMockAddress {
        return {
            state: []
        };
    }
}
