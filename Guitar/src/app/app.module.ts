import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'detail/:cid', component : HomeComponent},
      { path : 'products/:pid', component : DetailComponent},
      { path: 'cart', component : CartComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
