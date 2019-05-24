import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Page1tab1Page } from './page1tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Page1tab1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page1tab1Page]
})
export class Page1tab1PageModule {}
