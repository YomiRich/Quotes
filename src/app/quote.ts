// export class Quote {
//     id: number;
//     author: string;
//     quote: string;
//     postedBy: string;
    
// }
export class Quote {
    showAuthor: boolean;
    constructor(public id: number,public author: string,public quote: string, public postedBy: string,){
      this.showAuthor=false;
    }
  }