import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
/**
 * Created by eso on 02/12/16.
 */

@Injectable()
export class ProductService {

    private _productUrl = 'api/products/products.json';

    constructor(private _http: Http) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}