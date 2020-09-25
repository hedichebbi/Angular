import { ProductDetailGuard } from './products/product-detail.guard';
import { WelcomeComponent } from './home/welcome.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { ProductListComponent } from './products/product-list.component';
import {StarComponent} from './shared/star.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule  } from "@angular/fire/firestore";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule  } from "@angular/fire/database";
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component: ProductListComponent},
      {path:'products/:id',canActivate:[ProductDetailGuard],component: ProductDetailComponent},
      {path:'welcome',component: WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
