import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MainComponent }  from './main/main.component';
import { UserComponent }  from './utility/user/user.component';
import { ProductComponent }  from './utility/product/product.component';
import { OrderComponent }  from './utility/order/order.component';
import { LoginComponent }  from './utility/login/login.component';

import { AppRoutingModule } from './app.router';
import { Myhttp }  from './utility/service/myhttp.service';
import { Guard }  from './utility/guard/guard.service';

@NgModule({
  declarations: [
    AppComponent,MainComponent,UserComponent,ProductComponent,OrderComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [Myhttp,Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
