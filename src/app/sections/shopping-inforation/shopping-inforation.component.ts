import { Component } from '@angular/core';

@Component({
  selector: 'shopping-inforation',
  templateUrl: './shopping-inforation.component.html',
  styleUrls: ['./shopping-inforation.component.scss']
})
export class ShoppingInforationComponent {
  items: Array<any> = [
    {
      title: "Dutas",
      dose: "10 pills x 0.5mg",
      amount: "1",
      price: "23.30",
      cost: "23.30"

    }
  ]
  totalPrice: string = '23.30'
  step: 'first' | 'second' | 'third' = 'first'


  clickToSecondStep() {
    this.step = 'second'
  }

}
