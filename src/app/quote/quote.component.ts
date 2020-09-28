import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  upvotes = 0;
  downvotes = 0;
  isComplete = true;

  favquote: string;
  favauthor: string;
  favuser: string;
  favvotes: number;
  listvotes: number;
  days: Date

  quotes: Quote[] = [
    new Quote(0, "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou", "Rowena Rono", new Date(2020, 9, 6), 0, 0),
    new Quote(1, "Life is not measured by the number of breaths you take but by the moments that take your breath away.", "Maya Angelou", "Rowena Rono", new Date(2020,9, 19), 0, 0),
    new Quote(2, "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.", "Martin Luther King Jr.", "Rowena Rono", new Date(2020, 9, 14), 0, 0),
    new Quote(3, "Shallow understanding from people of good will is more frustrating than absolute misunderstanding from people of ill will.", "Martin Luther King Jr.", "Rowena Rono", new Date(2020, 9, 1), 0, 0)
  ]

  newQuote(quote) {
    quote.author = quote.author
    quote.quote = quote.quote
    quote.user = quote.user
    this.quotes.push(quote)
  }


  upVote(quote) {
    quote.upvotes = quote.upvotes + 1;
  }
  downVote(quote) {
    quote.downvotes = quote.downvotes + 1;
  }

  favQuote() {
    this.favvotes = 0;
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvotes > this.favvotes) {
        this.favvotes = this.quotes[i].upvotes;
        this.favauthor = this.quotes[i].author;
        this.favquote = this.quotes[i].quote;
        this.favuser = this.quotes[i].user;
        this.listvotes = this.quotes[i].downvotes;
        this.days = this.quotes[i].date;
      }
    }


  }


  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
