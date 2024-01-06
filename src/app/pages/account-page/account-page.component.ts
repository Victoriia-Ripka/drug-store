import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services';

const ordersList = [
  {
    id: 7643980998990,
    date: 'October 8,2021',
    status: 'Delivered',
    total: 105,
  },
  {
    id: 943980998990,
    date: 'October 8,2021',
    status: 'Processing',
    total: 100,
  },
  {
    id: 879980998990,
    date: 'October 8,2020',
    status: 'Delivered',
    total: 65,
  }
]

const billingEmails = [
  {
    name: 'Nina Jone',
    country: 'United Kingdom',
    street: 'Kristian holst 34 old street W1F 7NU',
    city: 'London',
    email: 'nina@gmail.com',
    phone: '+44 8749790988'
  },
  {
    name: 'Nina Jone',
    country: 'United Kingdom',
    street: 'Kristian holst 34 old street W1F 7NU',
    city: 'London',
    email: 'nina@gmail.com',
    phone: '+44 8749790988'
  },
]

const shippingEmails = [
  {
    name: 'Nina Jone',
    country: 'United Kingdom',
    street: 'Kristian holst 34 old street W1F 7NU',
    city: 'London',
    email: 'nina@gmail.com',
    phone: '+44 8749790988'
  },
]

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent {
  constructor(private backgroundService: BackgroundService) { }
  selectedAccountItem: string = 'track-order'
  ordersList: Array<any> = ordersList
  billingEmails: Array<any> = billingEmails
  shippingEmails: Array<any> = shippingEmails
  ordersCount: number = this.ordersList.length

  ngOnInit() {
    this.backgroundService.setBackgroundColor('white')
  }

  selectAccountItem(item: string): void {
    this.selectedAccountItem = item
  }

  addBillingAddress(form: any): void {
    console.log(form)    
    this.billingEmails.push(form)
  }

  addShippingAddress(form: any) {
    console.log(form)
    this.shippingEmails.push(form)
  }
}