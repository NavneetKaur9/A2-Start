import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent} from './shared/star-component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.comoponent';
import { ProductDetailGuard } from './products/product-guard.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        { path : 'welcome' , component : WelcomeComponent },
        { path : 'products' , component : ProductListComponent },
        { path : 'products/:id' , canActivate: [ProductDetailGuard] ,component : ProductDetailComponent },
        { path : '' , redirectTo : 'welcome' ,pathMatch: 'full' },
        { path : '**' , component : WelcomeComponent }
      ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  providers: [ProductDetailGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
