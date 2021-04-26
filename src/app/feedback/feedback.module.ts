import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {path:"",component:FeedbackComponent,
  children:[

 ]}];
@NgModule({
  declarations: 
  [FeedbackComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
     HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class FeedbackModule { }
