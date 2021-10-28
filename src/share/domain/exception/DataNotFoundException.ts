export default class DataNotFoundException {
  message: string;
  statusCode = 404;

  constructor(message = 'Data not found') {
    this.message = message;
  }

  public toJSON() {
    return { message: this.message };
  }
}
