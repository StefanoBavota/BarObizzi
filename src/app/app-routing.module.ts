import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'operator',
    loadChildren: () => import('./features/pages/operator/operator.module').then(m => m.OperatorPageModule)
  },
  {
    path: 'demo',
    loadChildren: () => import('./features/pages/demo/demo.module').then(m => m.DemoPageModule)
  },
  {
    path: 'type-choice/:tableId',
    loadChildren: () => import('./features/pages/type-choice/type-choice.module').then(m => m.TypeChoicePageModule)
  },
  {
    path: 'kitchen',
    loadChildren: () => import('./features/pages/kitchen/kitchen.module').then( m => m.KitchenPageModule)
  },
  {
    path: 'type-manage',
    loadChildren: () => import('./features/pages/type-manage/type-manage.module').then( m => m.TypeManagePageModule)
  },
  {
    path: 'product-manage',
    loadChildren: () => import('./features/pages/product-manage/product-manage.module').then( m => m.ProductManagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
