import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Content } from 'src/app/types/type';

@Component({
  selector: 'question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent {
  @Input()
  item: Content = {
    'id': 0,
    'question': 'how',
    'answer': 'answer'
    }
  
  @Input()
  selectedQuestion: number | null = null

  @Output()
  clickOn: EventEmitter<number> = new EventEmitter()

  @Output()
  clickOff: EventEmitter<number> = new EventEmitter()

  show() {
    
  }

  hide() {
    
  }
}
