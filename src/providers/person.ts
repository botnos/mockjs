import {IMockProps} from "../mock";
import {getString} from "../utils";
import {BaseProvider} from "./base";

export class PersonProvider extends BaseProvider {

    constructor(props: IMockProps) {
        super(props);
    }

    get firstName() {
        return getString(this.props, 'first_name');
    }
}
