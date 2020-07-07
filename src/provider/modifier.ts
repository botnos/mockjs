import {BaseProvider, Constructable} from './base';

export const Modifier = <T extends Constructable<BaseProvider>>(base: T) => {
    return class extends base {

        get lower(): any {
            this.addModifier(() => {
                const isArray = Array.isArray(this.result);
                if (isArray) {
                    this.result = this.result.map(o => o.toLowerCase());
                } else {
                    if (typeof this.result === 'string') {
                        this.result = this.result.toLowerCase();
                    } else if (typeof this.result === 'object') {
                        Object.keys(this.result).forEach((key) => {
                            this.result[key] = this.result[key].toLowerCase();
                        });
                    }
                }
            });
            return this;
        }

        get upper(): any {
            this.addModifier(() => {
                const isArray = Array.isArray(this.result);
                if (isArray) {
                    this.result = this.result.map(o => o.toUpperCase());
                } else {
                    if (typeof this.result === 'string') {
                        this.result = this.result.toUpperCase();
                    } else if (typeof this.result === 'object') {
                        Object.keys(this.result).forEach((key) => {
                            this.result[key] = this.result[key].toUpperCase();
                        });
                    }
                }
            });
            return this;
        }
    };
};
