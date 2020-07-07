import {BaseProvider, Constructable} from './base';

export const Internet = <T extends Constructable<BaseProvider>>(base: T) => {
    return class extends base {
        lorem: any;

        get emoji() {
            this.result = '😁';
            return this.process();
        }

        get email() {
            this.result = 'email@Email.com';
            return this.process();
        }
    };
};
