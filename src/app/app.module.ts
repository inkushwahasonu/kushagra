import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { BenefitFormComponent } from './component/pages/benefit-form/benefit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BenefitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
