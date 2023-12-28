import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder,) {

  }

  ngOnInit() { }

  toggleBillingForm(): void {
    this.isOpenedBillingForm = !this.isOpenedBillingForm
  }

  toggleShippingForm(): void {
    this.isOpenedShippingForm = !this.isOpenedShippingForm
  }

  addBillingAddress() {
    console.log(this)
    this.toggleBillingForm()
  }

  addShippingAddress() {
    this.toggleShippingForm()
  }



}
