import {IMockProps} from "../mock";

export abstract class BaseProvider {
    protected props;

    protected constructor(props: IMockProps) {
        this.props = props;
    }
}
