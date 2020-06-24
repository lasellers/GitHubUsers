export class Gist {

  constructor(
    public content?: string,
    public filename?: string,
    public size?: number,
    public contentUrl?: string,
    public language?: string,
    public url?: string,
    public id?: string,
    public cached?: boolean,
    public wasCached?: boolean,
  ) {
  }

}
