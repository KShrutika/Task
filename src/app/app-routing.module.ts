import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { HelpComponent } from './pages/help/help.component';
import { NewsComponent } from './pages/news/news.component';
import { PCardComponent } from './pages/pcard/pcard.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { SecurityComponent } from './pages/security/security.component';
import { TravelInsuranceComponent } from './pages/travel-insurance/travel-insurance.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { AccessibilityComponent } from './pages/accessibility/accessibility.component';

const routes: Routes = [
  {path:'resources', component: ResourcesComponent},
  {path:'travel-insurance', component: TravelInsuranceComponent},
  {path:'reservation', component: ReservationsComponent},
  {path:'expenses', component: ExpensesComponent},
  {path:'pcard', component: PCardComponent},
  {path:'security', component: SecurityComponent},
  {path:'news', component: NewsComponent},
  {path:'policy', component: PolicyComponent},
  {path:'help', component: HelpComponent},
  {path:'terms', component: TermsComponent},
  {path:'cookies', component: CookiesComponent},
  {path:'accessibility', component: AccessibilityComponent},
  {path:'privacy', component: PrivacyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ ResourcesComponent, TravelInsuranceComponent,ReservationsComponent,
  ExpensesComponent,PCardComponent,SecurityComponent,NewsComponent,PolicyComponent,HelpComponent,
  PrivacyComponent,AccessibilityComponent,TermsComponent,CookiesComponent]
