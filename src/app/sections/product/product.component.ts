import { Component } from '@angular/core';
import { DataService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

// як

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: any = {}
  selectedInfoItem: string = 'product-description'


  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.dataService.getProduct(productId).subscribe((data) => {
        this.product = Object.assign({}, data[0]);
      })
    });
  }

  selectInfoItem(item: string): void {
    this.selectedInfoItem = item
  }

}
