import { IProduct } from './product';
import {Injectable} from '@angular/core'
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';


@Injectable({
    providedIn:"root"
})
export class ProductService{

Products:IProduct[];
    
      
    private productUrl ="api/products/products.json";
    prods:any[];
    constructor(private http:HttpClient,  private firestore: AngularFirestore   ) {
       
        
    }
    create_NewEmploye(){
      let productTo = {};
      this.Products=[
        {
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
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2019",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2019",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "assets/images/xbox-controller.png"
        }
      ];
      productTo["productId"]= 2;
        productTo["productName"]= "Garden Cart--------------";
        productTo["productCode"]= "GDN-0023-------";
        productTo["releaseDate"]= "March 18, 2019----------";
        productTo["description"]= "15 gallon capacity rolling garden cart----------";
        productTo["price"]= 32.99;
        productTo["starRating"]= 4.2;
        productTo["imageUrl"]= "assets/images/garden_cart.png";
        this.Products.forEach(p=>this.firestore.collection("/Prods").add(p))
        this.firestore.collection("/Prods").add(this.Products);
    }

    getProductsFromServer() { 
     return this.firestore.collection<IProduct>("Prods/").snapshotChanges();
        // this.firestore.collection("Prods").snapshotChanges().subscribe(
        //   {
        //     next: products =>{
        //       // this.prods = products;
        //       console.log(products);
        //     },
        //     error(err)  {console.log(err)},
        //   }
        // );
        // return this.prods;
      //   const firebaseApp = firebase.initializeApp({
      //     apiKey: "AIzaSyDN6jd7_zBK0apCbYTfdFSFsxZpm5zB4a4",
      //     authDomain: "products-8d9b1.firebaseapp.com",
      //     databaseURL: "https://products-8d9b1.firebaseio.com",
      //     projectId: "products-8d9b1",
      //     storageBucket: "products-8d9b1.appspot.com",
      //     messagingSenderId: "159709390484",
      //     appId: "1:159709390484:web:58f05f5dd85e8a709f3681",
      //     measurementId: "G-VS4CPYZE9S"
      //   });
      //   const db = firebase.firestore();
      // var person=  db.collection("products-f4b29").doc("Leaf rake with 48-inch wooden handle.");
      // // console.log(person);
      // person.onSnapshot(snap =>{
      //   const berlin = snap.data();
      //   console.log(berlin);
      // })
      }




getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
}

private handleError(err: HttpErrorResponse){
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage="";
  if(err.error instanceof ErrorEvent){
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An Error occured: ${err.error.message}`;
  }
    else{
      // the backend returned an unseccessful response code.
      //the response body may contain clues as to what wrong,
      errorMessage= `Server returned code: ${err.status}, error message is : ${err.message}`;

    }
    console.log(errorMessage);
return throwError(err)
}

}