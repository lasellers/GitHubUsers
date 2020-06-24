export class Gists {

  constructor(
    public cached?: boolean,
    public content?: string,
    public contentUrl?: string,
    public filename?: string,
    public id?: string,
    public language?: string,
    public size?: number,
    public url?: string,
    public wasCached?: boolean,
  ) {
  }

}
