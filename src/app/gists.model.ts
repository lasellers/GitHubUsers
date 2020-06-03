export class Gists {

  constructor(
    public cached: boolean = false,
    public content: any = {},
    public contentUrl: string = '',
    public filename: string = '',
    public id: string = '',
    public language: string = '',
    public size: number = 0,
    public url: string = '',
    public wasCached?: boolean,
  ) {
  }

}
