import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemTableComponent } from './item-table/item-table.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const appRoutes: Routes = [
  { path: 'goods', component: ItemTableComponent },
  { path: 'goods/:id', component: ItemEditComponent },
  { path: 'goods/new', component: ItemEditComponent },
  { path: '',   redirectTo: '/goods', pathMatch: 'full' },
  { path: '**',  redirectTo: '/goods'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
