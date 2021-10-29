export default class Feature {
  key: string;
  state: boolean;

  constructor ({ key, state }: {key: string, state: boolean }) {
    this.key = key;
    this.state = state;
  }
}
