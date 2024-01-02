import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shopping-information-second',
  templateUrl: './shopping-information-second.component.html',
  styleUrls: ['./shopping-information-second.component.scss']
})
export class ShoppingInformationSecondComponent {
  @Input()
  step: 'first' | 'second' | 'third' = 'second'

  @Output()
  clickToThirdStep: EventEmitter<void> = new EventEmitter<void>();

  emitClickToThirdStep() {
    this.clickToThirdStep.emit()
  }
}
