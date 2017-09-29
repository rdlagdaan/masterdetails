import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product-detail.html', 
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent {
  productID: number;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(
        params => this.productID = params['id']
    );
  }
}