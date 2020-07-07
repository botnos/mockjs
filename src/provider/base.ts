import {Gender} from '../lib/gender';
import {Loc} from '../lib/locale';

export type Constructable<T = {}> = new (...args: any[]) => T;

export interface IOptions {
    locale: Loc | undefined;
    gender?: Gender;
}

export class BaseProvider {
    #modifiers: any = [];
    #result: any = '';
    #delayProcess: boolean = false;
    readonly #options: IOptions = {
        locale: Loc.en_US,
        gender: Gender.U,
    };

    constructor(options?: Loc | IOptions) {
        if (options !== undefined) {
            if (typeof options === 'string') {
                this.#options.locale = options;
            } else if (typeof options === 'object') {
                this.#options = options;
            }
        }
    }

    protected process() {
        this.#modifiers.forEach((m: any) => m());
        if (!this.#delayProcess) {
            this.#modifiers = [];
        }
        return this.val();
    }

    protected set delayProcess(value: boolean) {
        this.#delayProcess = value;
    }

    protected val() {
        const val = this.#result;
        this.#result = '';
        return val;
    }

    protected addModifier(modifier) {
        this.#modifiers.push(modifier);
    }

    protected get options(): IOptions {
        return this.#options;
    }

    protected get result(): any {
        return this.#result;
    }

    protected set result(value: any) {
        this.#result = value;
    }

    get female() {
        this.#options.gender = Gender.F;
        return this;
    }

    get male() {
        this.#options.gender = Gender.M;
        return this;
    }
}
