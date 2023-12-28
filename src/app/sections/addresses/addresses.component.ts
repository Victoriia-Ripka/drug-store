import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent {
  isOpenedBillingForm: boolean = false
  isOpenedShippingForm: boolean = false

  billingAddresses: Array<any> = [
    {
      name: 'Nina Jone',
      country: 'United Kingdom',
      street: 'Kristian holst 34 old street W1F 7NU',
      city: 'London',
      email: 'nina@gmail.com',
      phone: '+44 8749790988'
    },
  ]
  shippingAddresses: Array<any> = []

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required)
  });

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  get emailControl() {
    return this.form.get('email') as FormControl;
  }

  get countryControl() {
    return this.form.get('country') as FormControl;
  }

  get streetControl() {
    return this.form.get('street') as FormControl;
  }

  get cityControl() {
    return this.form.get('city') as FormControl;
  }

  toggleBillingForm(): void {
    this.isOpenedBillingForm = !this.isOpenedBillingForm
  }

  toggleShippingForm(): void {
    this.isOpenedShippingForm = !this.isOpenedShippingForm
  }

  addBillingAddress() {
    console.log(this.form.value)
    this.billingAddresses.push(this.form.value)
    this.form.reset()
    this.toggleBillingForm()
  }

  addShippingAddress() {
    console.log(this.form.value)
    this.shippingAddresses.push(this.form.value)
    this.form.reset()
    this.toggleShippingForm()
  }



}
