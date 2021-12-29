import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductManagePageRoutingModule } from './product-manage-routing.module';

import { ProductManagePage } from './product-manage.page';
import { AddProductComponent } from 'src/app/shared/components/add-product/add-product.component';
import { EditProductComponent } from 'src/app/shared/components/edit-product/edit-product.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductManagePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ProductManagePage, AddProductComponent, EditProductComponent]
})
export class ProductManagePageModule { }
