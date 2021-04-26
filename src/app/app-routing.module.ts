import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:"",component:LoginComponent,pathMatch:'full'},
  {
    path: 'products/:list%3FsortTypr=/:value',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then(m => m.FeedbackModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
