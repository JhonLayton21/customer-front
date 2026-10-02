import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';
import { ListProductComponent } from './list/list.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule 
  ]
})
export class ProductsModule { }