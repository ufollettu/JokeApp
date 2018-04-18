export class Article {
  public title: string;
  public desc: string;
  public date: Date;
  public kind: string;

  constructor(title: string, desc: string, date: Date, kind: string) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.kind = kind;
  }

  selectClass(kind) {
    if (kind === 'image') {
      return 'card-outline-danger'
    } else {
      return 'card-outline-primary'
    }
  }
}
