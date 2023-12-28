import { Component } from '@angular/core';

@Component({
  selector: 'shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent {
  itemsList: Array<any> = [
    {
      title: "Dutas",
      count: 1,
      price: 23.30,
      dose: '10 pills x 0.5mg'
    }
  ]
}
