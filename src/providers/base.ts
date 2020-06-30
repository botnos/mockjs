import {IMockOptions} from "..";

export abstract class BaseProvider {
    protected props;

    protected constructor(props: IMockOptions) {
        this.props = props;
    }
}
