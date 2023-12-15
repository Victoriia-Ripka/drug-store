import { Component } from '@angular/core';

type Content = {
  id: number,
  question: string,
  answer: string
}

const content: Array<Content> = [
  {
    'id': 1,
    'question': 'Why is there no record of my tracking number with the regular delivery?',
    'answer': 'The number provided by regular delivery is NON- trackable.It is only in effect once the order has delivered or after there has been a delivery attempt made.It is provided to us by the regular delivery services so that we could ensure that you have received your order successfully.'
  },
  {
    'id': 2,
    'question': 'Why does my Express delivery tracking number show no history yet?',
    'answer': 'hi'
  },
  {
    'id': 3,
    'question': 'What should I do if I still haven\'t received my order?',
    'answer': 'hi'
  },
  {
    'id': 4,
    'question': 'What should I do if my order is partially missing?',
    'answer': 'hi'
  },
  {
    'id': 5,
    'question': 'What should I do if my order is delayed by customs?',
    'answer': 'hi'
  },
  {
    'id': 6,
    'question': 'How are the orders sent?',
    'answer': 'hi'
  },
  {
    'id': 7,
    'question': 'Do you provide worldwide shipping?',
    'answer': 'hi'
  },
]

@Component({
  selector: 'shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent {
  content: Array<Content> = [];
  selectedQuestion: number | null = null;

  ngOnInit(): void {
    this.content = content;
  }

  selectQuestion(id: number): void {
    this.selectedQuestion = id
  }

  hideAnswer(): void {
    this.selectedQuestion = 0
  }

  isItemSelected(id: number): boolean {
    return this.selectedQuestion === id;
  }
}
