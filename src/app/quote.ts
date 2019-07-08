// export class Quote {
//     id: number;
// quote: string;
//     author: string;
//
//     postedBy: string;

// }
export class Quote {
  showAuthor: boolean;
  constructor(
    public id: number,
    public author: string,
    public quote: string,
    public postedBy: string,
    public postedDate: Date
  ) {
    this.showAuthor = false;
  }
}
