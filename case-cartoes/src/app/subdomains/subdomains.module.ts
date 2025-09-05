import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { productGuard } from '../core/services/guards/product.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [productGuard],
    loadComponent: () =>
      import('./partner/partner.component').then((c) => c.PartnerComponent),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubdomainsModule {}
