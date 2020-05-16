export class Gist {

  constructor(
    public content: string,
    public filename: string,
    public size: number,
    public contentUrl: string,
    public language: string,
    public cached: boolean,
    public id: string,
    public url: string,
  ) {
  }

}
