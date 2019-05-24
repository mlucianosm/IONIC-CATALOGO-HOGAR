import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'page1tab1', loadChildren: './page1tab1/page1tab1.module#Page1tab1PageModule' },
  { path: 'page2tab2', loadChildren: './page2tab2/page2tab2.module#Page2tab2PageModule' },
  { path: 'page3tab3', loadChildren: './page3tab3/page3tab3.module#Page3tab3PageModule' },
  { path: 'proveedor', loadChildren: './proveedor/proveedor.module#ProveedorPageModule' },
  { path: 'gasfiter', loadChildren: './gasfiter/gasfiter.module#GasfiterPageModule' },
  { path: 'electricista', loadChildren: './electricista/electricista.module#ElectricistaPageModule' }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
