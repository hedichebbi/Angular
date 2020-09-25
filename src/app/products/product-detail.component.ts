import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from '@angular/router'
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle:string ="Product Detail";
product:IProduct;


  constructor(private route:ActivatedRoute,private productService: ProductService, private router:Router) {

   }

  ngOnInit(): void {
    
    this.productService.getProductsFromServer().subscribe(data =>{
      next: this.product = data.map(e=>{
         return {
           productId: e.payload.doc.data()["productId"],
           productName: e.payload.doc.data()["productName"],
           productCode: e.payload.doc.data()["productCode"],
           releaseDate: e.payload.doc.data()["releaseDate"],
           price: e.payload.doc.data()["price"],
           description: e.payload.doc.data()["description"],
           starRating: e.payload.doc.data()["starRating"],
           imageUrl:  e.payload.doc.data()["imageUrl"],
         }
       }).filter(prod =>prod.productId==id).shift();console.log(this.product);
       });


    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle +=`:${id}`;
    this.product={
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2019",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    }
  }
  onBack():void {
    this.router.navigate(['/products']);
  }

}
