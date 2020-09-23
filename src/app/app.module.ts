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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule  
    // AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
