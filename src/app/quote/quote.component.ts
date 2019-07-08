import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    {id:1, quote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',author:'― Martin Fowler',},
    {id:2, quote:'When you got born again your past was not erased, it became non-existent.',author:'― Pastor Chris Oyakhilome',},
    {id:3,quote:'I am not a great programmer; I am just a good programmer with great habits.', author:'― Kent Beck',},
      
  ];
  constructor() { }

  ngOnInit() {
  }

}
