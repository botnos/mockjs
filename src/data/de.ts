import {IMockData, IMockLorem, IMockPerson} from '../lib/data';

export default class implements IMockData {
    lorem: IMockLorem;

    get person(): IMockPerson {
        return {
            firstNameMale: [
                'Wolfgang', 'Olaf'
            ],
            firstNameFemale: [],
            lastName: [
                'Mozart'
            ]
        };
    }
}
