import { Component } from '@angular/core';
import { Content } from 'src/app/types/type';

const content: Array<Content> = [
  {
    id: 1,
    question: 'Is your site secure?',
    answer: 'Confidentiality: All the information you provide is confidential and will never be given to any third party.On our site, you fill in a form to order your medications.Your personal information inserted is used for the delivery of goods and for order confirmation messages.This information is also used to contact the customer if the need arises.This information will never be used for any spam or promotional messages etc. Security: None of our stuff have any access to the customers’ credit card information.Customer support operators can see only the last four digits of your credit card in our database.All the data from the “checkout page” is directly transferred to the secure server of the payment system.Payments security is ensured by encrypting your personal information during its transfer from your side to the bank for the actual processing.We use 128 bit Secure Sockets Layer(SSL) algorithm to encrypt all the information you input.'
  },
  {
    id: 2,
    question: 'What are the payment methods available?',
    answer: 'answer'
  },
  {
    id: 3,
    question: 'Is there a money back guarantee?',
    answer: 'answer'
  },
  {
    id: 4,
    question: 'What is the difference between regular pills and pills with "SR, ER, XR, XL, TR, CR" abbreviates?',
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
  selector: 'ordering-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class OrderingFaqComponent {
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
