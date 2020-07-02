import DE from './de';
import {IMockAddress, IMockPerson} from '../lib/data';

export default class extends DE {

    person(): IMockPerson {
        return super.person();
    }

    address(): IMockAddress {
        return {
            state: [
                'Baden-Württemberg', 'Bayern', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hessen', 'Mecklenburg-Vorpommern', 'Niedersachsen', 'Nordrhein-Westfalen', 'Rheinland-Pfalz', 'Saarland', 'Sachsen', 'Sachsen-Anhalt', 'Schleswig-Holstein', 'Thüringen'
            ]
        };
    }
}
