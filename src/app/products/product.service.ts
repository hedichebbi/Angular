import { IProduct } from './product';
import {Injectable} from '@angular/core'
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class ProductService{

    private productUrl ="www.myWebservice.com/api/products";
  
    constructor(private http:HttpClient) {
       
        
    }

getProducts():IProduct[]{
    return[{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2019",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      }]
    //   return this.http.get<IProduct>(this.productUrl);
}

// getProducts():Observable<IProduct>{
//     return this.http.get<IProduct>(this.productUrl);
// }


}