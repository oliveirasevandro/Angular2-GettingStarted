import {CanActivate, ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Inject} from "@angular/core";
/**
 * Created by eso on 02/12/16.
 */

@Inject()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');
            this._router.navigate(['/products']);
            return false;
        }

        return true;
    }



}