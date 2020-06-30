import {IMockProps} from "../lib/mock";
import {getString} from "../lib/utils";
import {BaseProvider} from "./base";

export class PersonProvider extends BaseProvider {

    constructor(props: IMockProps) {
        super(props);
    }

    get firstName() {
        return getString(this.props, 'first_name');
    }
}
