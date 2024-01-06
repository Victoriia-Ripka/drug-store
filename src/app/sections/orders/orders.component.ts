import { Component, Input } from '@angular/core';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input()
  ordersList: Array<any> = []; 
  @Input()
  ordersCount: number = 0

}
