import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorPageRoutingModule } from './operator-routing.module';

import { OperatorPage } from './operator.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableModalComponent } from 'src/app/shared/components/table-modal/table-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [OperatorPage, TableModalComponent]
})
export class OperatorPageModule {}
