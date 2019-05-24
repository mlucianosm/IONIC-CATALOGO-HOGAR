import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Page2tab2Page } from './page2tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Page2tab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page2tab2Page]
})
export class Page2tab2PageModule {}
