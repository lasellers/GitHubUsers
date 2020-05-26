export class Gist {
  // static content;

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

  /*public blankGist() {
    this.content = '';
    this.filename = '';
    this.size = 0;
    this.contentUrl = '';
    this.language = '';
    this.cached = false;
    this.wasCached = false;
    this.id = '';
    this.url = '';
    return this; //.slice()
  }*/

  /*static blankGist2() {
    Gist.content ='';

    return Gist;
  }*/
}
