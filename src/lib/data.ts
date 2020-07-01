/**
 * Mock data interface
 */
export interface IMockData {
    person(): IMockPerson;
}

export interface IMockPerson {
    firstNameMale: string[];
    firstNameFemale: string[];
    lastName: string[];
}
