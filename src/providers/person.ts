import {IMockOptions} from "..";
import {getString} from "../lib/utils";
import {BaseProvider} from "./base";

export class PersonProvider extends BaseProvider {

    constructor(props: IMockOptions) {
        super(props);
    }

    get firstName() {
        return getString(this.props, 'first_name');
    }
}
