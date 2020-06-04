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
    public public_gists?: number,
    // tslint:disable-next-line:variable-name
    public avatar_url?: string,
    public hireable?: boolean,
    // tslint:disable-next-line:variable-name
    public public_repos?: number,
    // tslint:disable-next-line:variable-name
    public created_at?: string,
    // tslint:disable-next-line:variable-name
    public updated_at?: string,
  ) {
  }

}
