import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent {
  isOpenedBillingForm: boolean = false
  isOpenedShippingForm: boolean = false
  @Input() billingAddresses: Array<any> = []
  @Input() shippingAddresses: Array<any> = []
  @Output() addBillingAddresses: EventEmitter<any> = new EventEmitter<any>()
  @Output() addShippingAddresses: EventEmitter<any> = new EventEmitter<any>()

  addBillAddress() {
    this.addBillingAddresses.emit(this.form.value)
    this.form.reset()
    this.toggleBillingForm()
  }

  addShippAddress() {
    this.addShippingAddresses.emit(this.form.value)
    this.form.reset()
    this.toggleShippingForm()
  }

  toggleBillingForm(): void {
    this.isOpenedBillingForm = !this.isOpenedBillingForm
  }

  toggleShippingForm(): void {
    this.isOpenedShippingForm = !this.isOpenedShippingForm
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required)
  });

  get nameControl() {
    return this.form.get('name') as FormControl
  }

  get emailControl() {
    return this.form.get('email') as FormControl
  }

  get countryControl() {
    return this.form.get('country') as FormControl
  }

  get streetControl() {
    return this.form.get('street') as FormControl
  }

  get cityControl() {
    return this.form.get('city') as FormControl
  }
}
