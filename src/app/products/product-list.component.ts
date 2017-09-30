import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
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
    errorMessage:string;
    constructor(private _productService: ProductService){

    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => this.products = products,
                error => this.errorMessage = <any>error
            );
    }
    onNotify(message: string): void { 
        this.pageTitle = 'Product List: ' + message;
    }
}
