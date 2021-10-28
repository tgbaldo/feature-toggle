export default class Feature {
    name: string;
    state: boolean;

    constructor ({ name, state }: {name: string, state: boolean }) {
        this.name = name;
        this.state = state;
    }
}
