export class User {

  constructor(
    public id?: string,
    public login?: string,
    public bio?: string,
    public blog?: string,
    public company?: string,
    public email?: string,
    public followers?: number,
    public following?: number,
    public location?: string,
    public name?: string,
    public public_gists?: number
  ) {
  }

}
