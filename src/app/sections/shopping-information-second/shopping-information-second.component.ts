import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shopping-information-second',
  templateUrl: './shopping-information-second.component.html',
  styleUrls: ['./shopping-information-second.component.scss']
})
export class ShoppingInformationSecondComponent {
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
  selectedPaymentMethod: 'credit' | 'paypal' | '' = 'credit'

  selectMethod(method: string) {
    if (this.selectedPaymentMethod === method) {
      this.selectedPaymentMethod = ''
    }
    else if (method === 'credit' || method === 'paypal') {
      this.selectedPaymentMethod = method
    }
  }


  @Input()
  step: 'first' | 'second' | 'third' = 'second'

  @Output()
  clickToThirdStep: EventEmitter<void> = new EventEmitter<void>();

  emitClickToThirdStep() {
    console.log(this.form.value)
    this.form.reset()
    this.clickToThirdStep.emit()
  }

  form = new FormGroup({
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

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  get surnameControl() {
    return this.form.get('surname') as FormControl;
  }

  get emailControl() {
    return this.form.get('email') as FormControl;
  }

  get phoneControl() {
    return this.form.get('phone') as FormControl;
  }

  get countryControl() {
    return this.form.get('country') as FormControl;
  }

  get streetControl() {
    return this.form.get('street') as FormControl;
  }

  get apartmentControl() {
    return this.form.get('apartment') as FormControl;
  }

  get cityControl() {
    return this.form.get('city') as FormControl;
  }

  get postcodeControl() {
    return this.form.get('postcode') as FormControl;
  }
}
