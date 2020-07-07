import {BaseProvider, Constructable} from './base';
import {getData, getRandomFromArray} from '../lib/utils';

export const Address = <T extends Constructable<BaseProvider>>(base: T) => {
    return class extends base {
        // tslint:disable-next-line:variable-name
        private __address = Symbol('address');

        constructor(...args: any[]) {
            super(...args);
            this[this.__address] = getData(this.options).address();
        }

        get state(): string {
            this.result = getRandomFromArray(this[this.__address].state);
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
            this.result = this[this.__address].state;
            return this.process();
        }

        get provinces(): string[] {
            return this.states;
        }
    };
};
