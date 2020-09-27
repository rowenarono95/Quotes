import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(0, "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou", "Rowena Rono", new Date(), 0, 0),
    new Quote(1, "Life is not measured by the number of breaths you take but by the moments that take your breath away.", "Maya Angelou", "Rowena Rono", new Date(), 0, 0),
    new Quote(2, "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.", "Martin Luther King Jr.", "Rowena Rono", new Date(), 0, 0),
    new Quote(3, "Shallow understanding from people of good will is more frustrating than absolute misunderstanding from people of ill will.", "Martin Luther King Jr.", "Rowena Rono", new Date(), 0, 0)
  ]
  upVotes = 0;
  downVotes = 0;


  newQuote(quote) {
    quote.author = quote.author
    quote.quote = quote.quote
    quote.user = quote.user
    this.quotes.push(quote)


  }
  constructor() { }

  ngOnInit(): void {
  }

}
