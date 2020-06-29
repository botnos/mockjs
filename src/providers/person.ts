import {IMockProps} from "../mock";
import {getString} from "../utils";

export class Person {
    protected props;

    constructor(props: IMockProps) {
        this.props = props;
    }

    get firstName() {
        return getString(this.props, 'first_name');
    }
}
