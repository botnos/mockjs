/**
 * Mock data interface
 */
export interface IMockData {
    person: IMockPerson;
    lorem: IMockLorem;
}

export interface IMockPerson {
    firstNameMale: string[];
    firstNameFemale: string[];
    lastName: string[];
}

export interface IMockLorem {
    word: string;
}
