import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss']
})
export class ShoppingCartModalComponent {
  @Input() itemsList: Array<any> = []
  @Output() delete: EventEmitter<number> = new EventEmitter<number>()

  deleteProduct(id: number): void {
    this.delete.emit(id)
  }
}
