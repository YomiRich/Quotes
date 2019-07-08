import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [
    {id:1,quote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author:'― Martin Fowler',postedby:'Yomi Rich'},
    {id:2,quote:'When you got born again your past was not erased, it became non-existent.', author:'― Pastor Chris Oyakhilome',postedby:'Yomi Rich'},
    {id:3,quote:'I am not a great programmer; I am just a good programmer with great habits.', author:'― Kent Beck',postedby:'Yomi Rich'},
      
  ];
}
