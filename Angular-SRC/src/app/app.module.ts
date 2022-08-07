import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HealthInsuranceComponent } from './components/health-insurance/health-insurance.component';
import { HomeInsuranceComponent } from './components/home-insurance/home-insurance.component';
import { HomeRequestFromComponent } from './components/home-request-from/home-request-from.component';
import { HealthDetailedDescComponent } from './components/health-detailed-desc/health-detailed-desc.component';
import { UserPoliciesComponent } from './components/user-policies/user-policies.component';
import { AuthguardGuard } from './authguard.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PolicyRequestsComponent } from './components/policy-requests/policy-requests.component';
import { ModifyPoliciesComponent } from './components/modify-policies/modify-policies.component';
import { EditHomePolicyComponent } from './components/edit-home-policy/edit-home-policy.component';

const route : Routes = [
  {path : '', component : HomePageComponent },
   {path : 'admin-login', component : AdminLoginComponent},
   {path: 'user-login', component : UserLoginComponent},
   {path: 'user-signup', component : UserSignupComponent},
   {path: 'health-insurances', component : HealthInsuranceComponent},
   {path: 'home-insurance-request', canActivate : [AuthguardGuard], component : HomeRequestFromComponent},
   {path: 'health-insurance-details', component : HealthDetailedDescComponent},
   {path: 'home-insurance', component : HomeInsuranceComponent},
   {path: 'users-policies',canActivate : [AuthguardGuard], component : UserPoliciesComponent},
   {path: 'admin-dashboard',canActivate : [AuthguardGuard], component : AdminDashboardComponent},
   {path: 'policy-requests',canActivate : [AuthguardGuard], component : PolicyRequestsComponent},
   {path: 'modify-policies',canActivate : [AuthguardGuard], component : ModifyPoliciesComponent},
   {path: 'edit-home-policy/:policyid',canActivate : [AuthguardGuard], component : EditHomePolicyComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserSignupComponent,
    HomePageComponent,
    HealthInsuranceComponent,
    HomeInsuranceComponent,
    HomeRequestFromComponent,
    HealthDetailedDescComponent,
    UserPoliciesComponent,
    AdminDashboardComponent,
    PolicyRequestsComponent,
    ModifyPoliciesComponent,
    EditHomePolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
