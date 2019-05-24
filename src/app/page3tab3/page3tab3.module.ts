import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Page3tab3Page } from './page3tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Page3tab3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page3tab3Page]
})
export class Page3tab3PageModule {}
