import { Component } from '@angular/core';

@Component({
  selector: 'shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent {
  itemsList: Array<any> = [
    {
      id: 1,
      title: "Dutas",
      count: 1,
      price: 23.30,
      dose: '10 pills x 0.5mg'
    },
    {
      id: 2,
      title: "Dutas",
      count: 1,
      price: 23.30,
      dose: '10 pills x 0.5mg'
    },
    {
      id: 3,
      title: "Dutas",
      count: 1,
      price: 23.30,
      dose: '10 pills x 0.5mg'
    }
  ]

  deleteProductFromCart(id: number): void {
    const index = this.itemsList.findIndex(
      product => product.id === id
    );
    this.itemsList.splice(index, 1)
  }

}
