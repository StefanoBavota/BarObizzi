import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeManagePage } from './type-manage.page';

const routes: Routes = [
  {
    path: '',
    component: TypeManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeManagePageRoutingModule {}
