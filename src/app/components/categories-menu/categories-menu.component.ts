import { Component, EventEmitter, Input, Output } from '@angular/core';
import { categoriesList } from 'src/app/data';

@Component({
  selector: 'categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss']
})
export class CategoriesMenuComponent {
  categories = categoriesList
  @Input() isOpened: boolean | undefined
  @Input() selectedCategory: string | undefined
  @Output() close: EventEmitter<void> = new EventEmitter<void>()
  @Output() selectCategoryInModal: EventEmitter<string> = new EventEmitter<string>()

  closeModal() {
    this.close.emit()
  }

  selectCategory(category: string): void {
    this.selectCategoryInModal.emit(category)
    this.closeModal()
  }
}
