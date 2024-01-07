import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/type';

@Component({
  selector: 'shopping-information-third',
  templateUrl: './shopping-information-third.component.html',
  styleUrls: ['./shopping-information-third.component.scss']
})
export class ShoppingInformationThirdComponent {
  @Input() totalPrice: string = '0'
  @Input() orderList: Array<any> = []
  @Input() delivery: Array<any> = []
  @Input() user: User = {}

  getDeliveryPrice() {
    if (this.delivery[0].choosen) {
      return this.delivery[0].price.toFixed(2)
    }
    return this.delivery[1].price.toFixed(2)
  }

  getDeliveryType() {
    if (this.delivery[0].choosen) {
      return this.delivery[0].type
    }
    return this.delivery[1].type
  }

  getPaymentType() {
    if (this.user.payment?.paymentMethod == 'credit') {
      return 'Credit card'
    }
    return 'Paypal'
  }

  normalizePrice(price: number): string {
    return price.toFixed(2)
  }
}


