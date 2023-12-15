import { Component, Input } from '@angular/core';

type Content = {
  id: number,
  question: string,
  answer: string
}


@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent {
  // @Input()
  // item: Content

  // ngOnInit(item) {
  //   this.item = { ...item }
  // }
}
