import {BaseProvider, Constructable} from '../lib/base';
import {getData, getRandomFromArray} from '../lib/utils';
import {IMockAddress} from '../lib/data';

export const Address = <T extends Constructable<BaseProvider>>(base: T) => {
    return class extends base {
        #addresses: IMockAddress;

        constructor(...args: any[]) {
            super(...args);
            this.#addresses = getData(this.options).address();
        }

        get state(): string {
            this.result = getRandomFromArray(this.#addresses.state);
            return this.process();
        }

        get province(): string {
            return this.state;
        }

        get address(): object {
            return {
                state: this.state
            };
        }

        get states(): string[] {
            this.result = this.#addresses.state;
            return this.process();
        }

        get provinces(): string[] {
            return this.states;
        }
    };
};
