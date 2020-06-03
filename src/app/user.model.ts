export class User {

  constructor(
    public id?: number,
    public login?: string,
    public bio?: string,
    public blog?: string,
    public company?: string,
    public email?: string,
    public followers?: number,
    public following?: number,
    public location?: string,
    public name?: string,
    // tslint:disable-next-line:variable-name
    public public_gists?: number
  ) {
  }

}
