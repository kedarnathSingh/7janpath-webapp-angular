import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'curency-list',
    loadChildren: () => import('./currency.module').then(m => m.CurrencyModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('../offers/offers.module').then(m => m.OffersModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'travel-insurance',
    loadChildren: () => import('../travel-insurance/travel-insurance.module').then(m => m.TravelInsuranceModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRoutingModule { }
