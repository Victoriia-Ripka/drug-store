import { Component } from '@angular/core';
import { DataService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';

const packages = [
  {
    "Package": '10 pills x 0.5mg',
    "Per Pill": "2.33",
    "Per Pack": "23.30",
  },
  {
    "Package": '20 pills x 0.5mg',
    "Per Pill": "2.33",
    "Per Pack": "23.30",
  },
  {
    "Package": '30 pills x 0.5mg',
    "Per Pill": "1.92",
    "Per Pack": "57.56",
  },
  {
    "Package": '60 pills x 0.5mg',
    "Per Pill": "2.33",
    "old price": "46.55",
    "discount": "13%",
    "Per Pack": "40.43",
    "shipping": "Free airmall shipping"
  }
]

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: any = {}
  selectedInfoItem: string = 'reviews'

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.dataService.getProduct(productId).subscribe((data) => {
        this.product = Object.assign({}, data[0]);
        this.product["packages"] = packages
      })
    });
  }

  selectInfoItem(item: string): void {
    this.selectedInfoItem = item
  }

}
