import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { ProductListComponent } from './products/product-list.component';
import {StarComponent} from './shared/star.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    // AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
