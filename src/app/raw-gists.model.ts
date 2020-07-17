export class RawGists {

  constructor(
    public url?: string,
    public forks_url?: string,
    public commits_url?: string,
    public id?: string,
    public node_id?: string,
    public git_pull_url?: string,
    public git_push_url?: string,
    public html_url?: string,
    public files?: [
      {
        id,
        url,
        raw_url,
        filename,
        language,
        size,
      }
    ],
    // public public? boolean,
    // tslint:disable-next-line:variable-name
    public created_at?: string,
    // tslint:disable-next-line:variable-name
    public updated_at?: string,
    public description?: string,
    public comments?: string,
    public user?: string,
    public comments_url?: string,
    public owner?: any,
    public truncated?: boolean
  ) {
  }

}
