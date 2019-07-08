import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
  //   {id:1, quote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',author:'― Martin Fowler',postedby:'Yomi Rich'},
  //   {id:2, quote:'When you got born again your past was not erased, it became non-existent.',author:'― Pastor Chris Oyakhilome',postedby:'Yomi Rich'},
  //   {id:3,quote:'I am not a great programmer; I am just a good programmer with great habits.', author:'― Kent Beck',postedby:'Yomi Rich'},
      
  // ];
  new Quote(1,'\"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" ','― Martin Fowler','Yomi Rich', new Date(2019,3,14)),
    new Quote(2,'\" When you got born again your past was not erased, it became non-existent.\" ','― Pastor Chris Oyakhilome','Yomi Rich', new Date(2019,3,14)),
    new Quote(3,'\" I am not a great programmer; I am just a good programmer with great habits.\" ','― Kent Beck','Yomi Rich', new Date(2019,3,14)),
      
  ];
  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
completeGoal(isComplete, index){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}
  constructor() { }

  ngOnInit() {
  }

}