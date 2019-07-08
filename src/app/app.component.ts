import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
 
  quotes:string[];

  constructor(){
    this.quotes = ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 'When you got born again your past was not erased, it became non-existent.', 'I am not a great programmer; I am just a good programmer with great habits.']
  } 
}

