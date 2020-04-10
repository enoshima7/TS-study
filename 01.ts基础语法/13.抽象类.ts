class PP13 {
  private _name: string;
  constructor(_name: string) {}
  get name() {
    return this._name;
  }
}

const pp13 = new PP13('will');
