export class Gist {

  constructor(
    public content: string = '',
    public filename: string = '',
    public size: number = 0,
    public contentUrl: string = '',
    public language: string = '',
    public url: string = '',
    public id: string = '',
    public cached: boolean = false,
    public wasCached: boolean = false,
  ) {
  }

}
