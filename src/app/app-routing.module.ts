import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenefitFormComponent } from './component/pages/benefit-form/benefit-form.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'benefit-form', component: BenefitFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
