import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:"",component:ProductsComponent,
  children:[

 ]}];
@NgModule({
  declarations: 
  [ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
     HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class ProductsModule { }
