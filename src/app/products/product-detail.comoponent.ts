import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
	moduleId: module.id,
	templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
  	errorMessage: string;
	product: IProduct;

	constructor(private _route: ActivatedRoute,
				private _router: Router,
				private _productService:ProductService
				){}

	onBack():void{
		this._router.navigate(['/products']);
	}
	ngOnInit():void{
		let id = +this._route.snapshot.params['id'];
		this.getProduct(id);
	}
	getProduct(id: number) {
	    this._productService.getProduct(id).subscribe(
	      product => this.product = product,
	      error => this.errorMessage = <any>error);
	  }
}