import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeManagePageRoutingModule } from './type-manage-routing.module';

import { TypeManagePage } from './type-manage.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddTypeComponent } from 'src/app/shared/components/add-type/add-type.component';
import { EditTypeComponent } from 'src/app/shared/components/edit-type/edit-type.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeManagePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [TypeManagePage, AddTypeComponent, EditTypeComponent]
})
export class TypeManagePageModule {}
