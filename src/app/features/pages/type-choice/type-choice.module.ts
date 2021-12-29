import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeChoicePageRoutingModule } from './type-choice-routing.module';

import { TypeChoicePage } from './type-choice.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomOrderComponent } from 'src/app/shared/components/custom-order/custom-order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeChoicePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [TypeChoicePage, CustomOrderComponent]
})
export class TypeChoicePageModule {}
