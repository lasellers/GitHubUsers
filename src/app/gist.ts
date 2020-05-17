export class Gist {

  constructor(
    public content: string = '',
    public filename: string = '',
    public size: number = 0,
    public contentUrl: string = '',
    public language: string = '',
    public cached: boolean = false,
    public wasCached: boolean = false,
    public id: string = '',
    public url: string = '',
  ) {
  }

}
