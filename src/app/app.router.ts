import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent }  from './main/main.component';
import { UserComponent }  from './utility/user/user.component';
import { ProductComponent }  from './utility/product/product.component';
import { OrderComponent }  from './utility/order/order.component';
import { LoginComponent }  from './utility/login/login.component';
// 路由守卫
import { Guard } from './utility/guard/guard.service';

const routes: Routes = [
  { path: '', redirectTo: "/main" ,pathMatch:"full"},
  { path: 'main', component: MainComponent ,
      children:[
        {path: 'login', component: LoginComponent},
        {path: 'user', component: UserComponent,canActivate:[Guard]},
        {path: 'product', component: ProductComponent,canActivate:[Guard]},
        {path: 'order', component: OrderComponent,canActivate:[Guard]},
        {path:"**",redirectTo:"/main",pathMatch:"full"}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
