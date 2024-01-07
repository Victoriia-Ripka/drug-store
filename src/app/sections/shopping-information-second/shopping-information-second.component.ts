import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/types/type';

@Component({
  selector: 'shopping-information-second',
  templateUrl: './shopping-information-second.component.html',
  styleUrls: ['./shopping-information-second.component.scss']
})
export class ShoppingInformationSecondComponent {
  selectedPaymentMethod: 'credit' | 'paypal' | '' = 'credit'
  isShippingFormNeeded: boolean = false
  validForm: boolean = false
  billingForm!: FormGroup
  shippingForm!: FormGroup
  paymentForm!: FormGroup

  @Input() totalPrice: string = '0'
  @Input() orderList: Array<any> = []
  @Input() delivery: Array<any> = []
  @Input() user: User = {}
  @Input() step: 'first' | 'second' | 'third' = 'second'

  @Output() clickToThirdStep: EventEmitter<void> = new EventEmitter<void>()
  @Output() userDataChanged: EventEmitter<User> = new EventEmitter<User>()

  ngOnInit() {
    this.billingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      apartment: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required),
      checkboxControl: new FormControl(false)
    })

    this.shippingForm = new FormGroup({
      country: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      apartment: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required)
    })

    this.paymentForm = new FormGroup({
      number: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required)
    })

    this.billingForm.get('checkboxControl')!.valueChanges.subscribe((value) => {
      this.isShippingFormNeeded = value
    })
  }

  createUser() {
    this.user = {
      billing: {
        name: this.nameControl.value.trim(),
        surname: this.surnameControl.value.trim(),
        email: this.emailControl.value.trim(),
        phone: this.phoneControl.value.trim(),
        country: this.billingCountryControl.value.trim(),
        street: this.streetControl.value.trim(),
        apartment: this.apartmentControl.value.trim(),
        city: this.cityControl.value.trim(),
        postcode: this.postcodeControl.value.trim(),
      },
      shipping: this.isShippingFormNeeded ? this.shippingForm.value : null,
      payment: this.paymentForm.value
    }

    if (this.billingForm.valid && this.paymentForm.valid) {
      if (this.isShippingFormNeeded && this.shippingForm.valid) {
        this.validForm = true;
      } else if (!this.isShippingFormNeeded) {
        this.validForm = true;
      } else {
      }
    }
  }

  emitClickToThirdStep() {
    this.createUser()

    if (this.validForm) {
      this.billingForm.reset()
      this.paymentForm.reset()
      if (this.isShippingFormNeeded) {
        this.shippingForm.reset()
      }

      this.userDataChanged.emit(this.user);
      this.clickToThirdStep.emit()
    }
  }

  selectMethod(method: string) {
    if (this.selectedPaymentMethod === method) {
      this.selectedPaymentMethod = ''
    }
    else if (method === 'credit' || method === 'paypal') {
      this.selectedPaymentMethod = method
    }
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

  get nameControl() {
    return this.billingForm.get('name') as FormControl
  }

  get surnameControl() {
    return this.billingForm.get('surname') as FormControl
  }

  get emailControl() {
    return this.billingForm.get('email') as FormControl
  }

  get phoneControl() {
    return this.billingForm.get('phone') as FormControl
  }

  get billingCountryControl() {
    return this.billingForm.get('country') as FormControl
  }

  get streetControl() {
    return this.billingForm.get('street') as FormControl
  }

  get apartmentControl() {
    return this.billingForm.get('apartment') as FormControl
  }

  get cityControl() {
    return this.billingForm.get('city') as FormControl
  }

  get postcodeControl() {
    return this.billingForm.get('postcode') as FormControl
  }

  get sCountryControl() {
    return this.shippingForm.get('country') as FormControl
  }

  get sStreetControl() {
    return this.shippingForm.get('street') as FormControl
  }

  get sApartmentControl() {
    return this.shippingForm.get('apartment') as FormControl
  }

  get sCityControl() {
    return this.shippingForm.get('city') as FormControl
  }

  get sPostcodeControl() {
    return this.shippingForm.get('postcode') as FormControl
  }

  get numberControl() {
    return this.paymentForm.get('number') as FormControl
  }

  get cardNameControl() {
    return this.paymentForm.get('name') as FormControl
  }

  get dateControl() {
    return this.paymentForm.get('date') as FormControl
  }

  get codeControl() {
    return this.paymentForm.get('code') as FormControl
  }
}
