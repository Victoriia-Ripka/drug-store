import { Component } from '@angular/core';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  ordersList: Array<any> = [
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
    }]
  ordersCount: number = this.ordersList.length

}
