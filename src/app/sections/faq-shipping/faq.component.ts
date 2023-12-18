import { Component } from '@angular/core';
import { Content } from 'src/app/types/type';

const content: Array<Content> = [
  {
    id: 1,
    question: 'Where do the pills come from?',
    answer: 'The pills we offer are produced by Indian manufacturers. To make sure our entire product list is in stock, the orders are sent out directly from our manufacturer.'
  },
  {
    id: 2,
    question: 'What shipping methods are available?',
    answer: 'answer'
  },
  {
    id: 3,
    question: 'What countries do you ship orders to? What are the shipping costs? How long does the delivery take?',
    answer: 'answer'
  },
  {
    id: 4,
    question: 'How do you ship orders? Will I have to sign for the package?',
    answer: 'answer'
  },
  {
    id: 5,
    question: 'Will my order be delivered in one package or you will divide it in case the order is large?',
    answer: 'answer'
  },
  {
    id: 6,
    question: 'What if the order is not received during the time stated?',
    answer: 'answer'
  },
]

@Component({
  selector: 'shipping-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class ShippingFaqComponent {
  content: Array<Content> = [];
  selectedQuestion: number | null = null;

  ngOnInit(): void {
    this.content = content;
  }

  showAnswer(id: number): void {
    this.selectedQuestion = id
  }

  hideAnswer(): void {
    this.selectedQuestion = 0
  }

  isItemSelected(id: number): boolean {
    return this.selectedQuestion === id;
  }
}
