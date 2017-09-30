import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()

export class ProductDetailGuard implements CanActivate{

	constructor(private _route:Router){}

	canActivate(route: ActivatedRouteSnapshot):boolean {
		let id = +route.url[1].path;
		if( isNaN(id) || id < 1){
			alert("invalid");
			this._route.navigate(['/products']);
			return false;
		}
		return true;
	}
}