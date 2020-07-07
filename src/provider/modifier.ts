import {BaseProvider, Constructable} from './base';

export const Modifier = <T extends Constructable<BaseProvider>>(base: T) => {
    return class extends base {

        get lower(): any {
            this.modifiers.push(() => {
                const isArray = Array.isArray(this.result);
                this.result = isArray ? this.result.map(o => o.toLowerCase()) : this.result.toLowerCase();
            });
            return this;
        }

        get upper(): any {
            this.modifiers.push(() => {
                const isArray = Array.isArray(this.result);
                this.result = isArray ? this.result.map(o => o.toUpperCase()) : this.result.toUpperCase();
            });
            return this;
        }
    };
};
