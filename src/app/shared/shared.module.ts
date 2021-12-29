import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { OrdersModalComponent } from './components/orders-modal/orders-modal.component';
import { InputComponent } from './components/input/input.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';
import { ProductsModalComponent } from './components/products-modal/products-modal.component';
import { CheckoutModalComponent } from './components/checkout-modal/checkout-modal.component';
import { TableInfoComponent } from './components/table-info/table-info.component';

@NgModule({
  declarations: [
    ButtonComponent,
    OrdersModalComponent,
    InputComponent,
    OrderInfoComponent,
    ProductsModalComponent,
    CheckoutModalComponent,
    TableInfoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonComponent,
    OrdersModalComponent,
    InputComponent,
    OrderInfoComponent,
    ProductsModalComponent,
    CheckoutModalComponent,
    TableInfoComponent,
  ],
})
export class SharedModule { }
