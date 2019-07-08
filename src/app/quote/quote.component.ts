import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    
    new Quote(1,'\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" ','― Martin Fowler','Yomi Rich', new Date(2019,3,14)),
    new Quote(2,'\" When you got born again your past was not erased, it became non-existent.\" ','― Pastor Chris Oyakhilome','Yomi Rich', new Date(2019,3,14)),
    new Quote(3,'\" I am not a great programmer; I am just a good programmer with great habits.\" ','― Kent Beck','Yomi Rich', new Date(2019,3,14)),
      
  ];
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }


deleteQuote(isComplete, index){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate);
  this.quotes.push(quote);
}
  constructor() { }

  ngOnInit() {
  }

}
