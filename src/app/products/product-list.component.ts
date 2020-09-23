import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: "pm-products",
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private _productService
  public pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  umageMargin: number = 2;
  showImage: boolean = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];

  product:any;
  errorMessage: string;
  products: IProduct[] = [];

  /**
   *
   */
  constructor(private productService: ProductService) {
    // this._productService=productService;
  
    // this.listFilter = 'cart';

  }
  onRatingClicked(message: string): void {
    this.pageTitle = "Product Liste :" + message;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
  //  this.productService.getProducts().subscribe(
  //     {
  //       next: products =>{
  //         this.products = products;
  //         // console.log(this.products);
  //       },
  //       error(err)  {console.log(err)},
  //       complete:()=>this.filteredProducts = this.products
  //     }
  //   );
  //  this.productService.create_NewEmploye() ;
    this.productService.getProductsFromServer().subscribe(data =>{
      this.product = data.map(e=>{
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
      }); console.log(this.product);
    });
   
    
  }


}
