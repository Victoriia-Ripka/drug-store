import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shopping-information-second',
  templateUrl: './shopping-information-second.component.html',
  styleUrls: ['./shopping-information-second.component.scss']
})
export class ShoppingInformationSecondComponent {
  selectedPaymentMethod: 'credit' | 'paypal' | '' = 'credit'
  
  @Input() totalPrice: string = '0'
  @Input() orderList: Array<any> = []
  @Input() delivery: Array<any> = []
  @Input() user: object = {}
  @Input() step: 'first' | 'second' | 'third' = 'second'
  
  @Output() clickToThirdStep: EventEmitter<void> = new EventEmitter<void>();

  selectMethod(method: string) {
    if (this.selectedPaymentMethod === method) {
      this.selectedPaymentMethod = ''
    }
    else if (method === 'credit' || method === 'paypal') {
      this.selectedPaymentMethod = method
    }
  }

  emitClickToThirdStep() {
    console.log(this.formBilling.value)
    this.formBilling.reset()
    this.clickToThirdStep.emit()
  }

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

  getDeliveryDesc() {
    if (this.delivery[0].choosen) {
      return this.delivery[0].description
    }
    return this.delivery[1].description
  }

  normalizePrice(price: number): string {
    return price.toFixed(2)
  }

  formBilling = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    apartment: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required)
  });

  formShipping = new FormGroup({
    country: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    apartment: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required)
  });

  get nameControl() {
    return this.formBilling.get('name') as FormControl
  }

  get surnameControl() {
    return this.formBilling.get('surname') as FormControl
  }

  get emailControl() {
    return this.formBilling.get('email') as FormControl
  }

  get phoneControl() {
    return this.formBilling.get('phone') as FormControl
  }

  get countryControl() {
    return this.formBilling.get('country') as FormControl
  }

  get streetControl() {
    return this.formBilling.get('street') as FormControl
  }

  get apartmentControl() {
    return this.formBilling.get('apartment') as FormControl
  }

  get cityControl() {
    return this.formBilling.get('city') as FormControl
  }

  get postcodeControl() {
    return this.formBilling.get('postcode') as FormControl
  }
}
