import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    {id:1, author:'― Martin Fowler',quote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'},
    {id:2, author:'― Pastor Chris Oyakhilome',quote:'When you got born again your past was not erased, it became non-existent.'},
    {id:3, author:'― Kent Beck',quote:'I am not a great programmer; I am just a good programmer with great habits.'},
      
  ];
  constructor() { }

  ngOnInit() {
  }

}
