import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  likeup = 0;
  likedown = 0;

  likeUp(){
    this.likeup = this.likeup + 1;
  }

  likeDown(){
    this.likedown = this.likedown + 1;
  }


  constructor() { }

  ngOnInit() {
  }

}
