import { Component } from '@angular/core';

@Component({
  selector: 'shopping-information-third',
  templateUrl: './shopping-information-third.component.html',
  styleUrls: ['./shopping-information-third.component.scss']
})
export class ShoppingInformationThirdComponent {
  orderList: Array<any> = [
    {
      title: 'Dutas',
      dose: '10 pills x 0.5mg',
      quantity: 1,
      price: '23.30'
    },
    
  ]
  deliveryPrice: string = '23.30'
  totalPrice: string = '46.60'

}


