import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter : string = '';
    products: IProduct[];
    constructor(private _productService: ProductService){

    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('In OnInit');
        this.products = this._productService.getProducts();
    }
    onNotify(message: string): void { 
        console.log(message);
        this.pageTitle = 'Product List: ' + message;
    }
}
