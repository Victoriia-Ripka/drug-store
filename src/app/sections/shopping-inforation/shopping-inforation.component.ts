import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

const products = [
  {
    id: 0,
    title: "Dutas",
    dose: "10 pills x 0.5mg",
    amount: 1,
    price: 23.30,
    cost: 23.30
  },
  {
    id: 1,
    title: "Amix",
    dose: "20 pills x 0.3mg",
    amount: 1,
    price: 23.30,
    cost: 23.30
  }
]

@Component({
  selector: 'shopping-inforation',
  templateUrl: './shopping-inforation.component.html',
  styleUrls: ['./shopping-inforation.component.scss']
})
export class ShoppingInforationComponent {
  items: Array<any> = products
  expressPrice = 25.45
  regularPrice = 16.75
  totalPrice: number = this.calculateTotalPrice()
  step: 'first' | 'second' | 'third' = 'first'
  deliveryForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.deliveryForm = this.fb.group({
      express: false,
      regular: false
    });
  }

  clickToSecondStep() {
    this.step = 'second'
  }

  clickToThirdStep() {
    this.step = 'third'
  }

  onCheckboxChange(checkedCheckbox: string) {
    const expressControl = this.deliveryForm.get('express')
    const regularControl = this.deliveryForm.get('regular')

    if (checkedCheckbox === 'express' && expressControl) {
      expressControl.setValue(true)
      regularControl?.setValue(false)
    } else if (checkedCheckbox === 'regular' && regularControl) {
      regularControl.setValue(true)
      expressControl?.setValue(false)
    }
    this.totalPrice = this.calculateTotalPrice()
  }

  get expressControl() {
    return this.deliveryForm?.get('express') as FormControl
  }

  get regularControl() {
    return this.deliveryForm?.get('regular') as FormControl
  }

  getDeliveryPrice(): number {
    if (this.expressControl && this.regularControl) {
      const expressSelected = this.expressControl.value ?? false
      const regularSelected = this.regularControl.value ?? false
      return expressSelected ? this.expressPrice : (regularSelected ? this.regularPrice : 0)
    }

    return 0
  }

  isDeliveryTypeSelected(): boolean {
    return this.expressControl?.value || this.regularControl?.value || false
  }

  deleteProductFromCart(id: number): void {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.totalPrice = this.calculateTotalPrice()
    } 
  }

  addItemQty(id: number): void {  
    const index = this.items.findIndex(item => item.id === id);
    this.items[index].amount += 1
    this.calculatePrice(id)
    this.totalPrice = this.calculateTotalPrice()
  }

  minusItemQty(id: number): void {
    const index = this.items.findIndex(item => item.id === id);
    if (this.items[index].amount > 0) {
      this.items[index].amount -= 1
      this.calculatePrice(id)
    }
    if (this.items[index].amount == 0){
      this.items.splice(index, 1)
    }
    this.totalPrice = this.calculateTotalPrice()
  }

  calculatePrice(id: number): void {
    this.items[id].cost = this.items[id].price * this.items[id].amount
  }

  normalizePrice(price: number): string {
    return price.toFixed(2)
  }

  calculateTotalPrice(): number {
    const deliveryPrice = this.getDeliveryPrice()
    return this.items.reduce((total, product) => total + (product.cost), 0) + deliveryPrice
    
  }
}
