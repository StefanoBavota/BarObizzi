import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeChoicePage } from './type-choice.page';

const routes: Routes = [
  {
    path: '',
    component: TypeChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeChoicePageRoutingModule {}
