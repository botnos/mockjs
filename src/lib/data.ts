/**
 * Mock data interface
 */
export interface IMockData {
    person(): IMockPerson;
    address(): IMockAddress;
}

export interface IMockPerson {
    firstNameMale: string[];
    firstNameFemale: string[];
    lastName: string[];
}

export interface IMockAddress {
    state: string[];
}
