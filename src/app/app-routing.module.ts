import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicInformationComponent } from './patient-information/basic-information/basic-information.component';
import { PhysicalAddressComponent } from './patient-information/physical-address/physical-address.component';
import { MailingAddressComponent } from './patient-information/mailing-address/mailing-address.component';
import { ContactComponent } from './patient-information/contact/contact.component';
import { EmployerComponent } from './account/employer/employer.component';
import { EmergencyContactComponent } from './patient-information/emergency-contact/emergency-contact.component';
import { EmergencyContactInformationComponent } from './patient-information/emergency-contact-information/emergency-contact-information.component';
import { ReferralComponent } from './account/referral/referral.component';
import { VisitReasonComponent } from './account/visit-reason/visit-reason.component';
import { AccountManagerComponent } from './account/account-manager/account-manager.component';
import { AccountManagerInformationComponent } from './account/account-manager-information/account-manager-information.component';
import { PaymentPreferencesComponent } from './account/payment-preferences/payment-preferences.component';
import { TermsAndConditionsComponent } from './account/terms-and-conditions/terms-and-conditions.component';
import { HistoriesConfirmationComponent } from './patient-histories/histories-confirmation/histories-confirmation.component';
import { BasicComponent } from './patient-histories/medical/basic/basic.component';
import { AlergiesAndConditionsComponent } from './patient-histories/medical/alergies-and-conditions/alergies-and-conditions.component';
import { SafetyProtocolComponent } from './patient-histories/medical/safety-protocol/safety-protocol.component';
import { FormerDentistComponent } from './patient-histories/dental/former-dentist/former-dentist.component';
import { FormerDentistInformationComponent } from './patient-histories/dental/former-dentist-information/former-dentist-information.component';
import { CareComponent } from './patient-histories/dental/care/care.component';
import { XrayComponent } from './patient-histories/dental/xray/xray.component';
import { TreatmentDispositionComponent } from './patient-histories/dental/treatment-disposition/treatment-disposition.component';
import { PreviousTreatmentComponent } from './patient-histories/dental/previous-treatment/previous-treatment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormSelectionComponent } from './form-selection/form-selection.component';
import { HiddenNavComponent } from './hidden-nav/hidden-nav.component';


const routes: Routes = [
  // Root and Landing Routes
  { path: '', redirectTo: '/nav', pathMatch: 'full' },
  { path: 'home', component: FormSelectionComponent },
  
  // Patient Information Routes 
  { path: 'patient-information/basic-information', component: BasicInformationComponent },
  { path: 'patient-information/physical-address', component: PhysicalAddressComponent },
  { path: 'patient-information/mailing-address', component: MailingAddressComponent },
  { path: 'patient-information/contact', component: ContactComponent },
  { path: 'patient-information/emergency-contact', component: EmergencyContactComponent },
  { path: 'patient-information/emergency-contact-information', component: EmergencyContactInformationComponent },

  // Account Information Routes
  { path: 'account/referral', component: ReferralComponent },
  { path: 'account/reason-for-visit', component: VisitReasonComponent },
  { path: 'account/account-manager', component: AccountManagerComponent },
  { path: 'account/account-manager-information', component: AccountManagerInformationComponent },
  { path: 'account/employer', component: EmployerComponent },
  { path: 'account/payment-preferences', component: PaymentPreferencesComponent },
  { path: 'account/terms-and-conditions', component: TermsAndConditionsComponent },

  // Patient Histories Routes - Medical
  { path: 'patient-histories/medical/basic', component: BasicComponent },
  { path: 'patient-histories/medical/allergies-and-conditions', component: AlergiesAndConditionsComponent },
  { path: 'patient-histories/medical/safety-protocol', component: SafetyProtocolComponent },

  // Patient Histories Routes - Dental
  { path: 'patient-histories/dental/dentist', component: FormerDentistComponent },
  { path: 'patient-histories/dental/dentist-information', component: FormerDentistInformationComponent },
  { path: 'patient-histories/dental/care', component: CareComponent },
  { path: 'patient-histories/dental/previous-treatment', component: PreviousTreatmentComponent },
  { path: 'patient-histories/dental/xray', component: XrayComponent },
  { path: 'patient-histories/dental/treatment-disposition', component: TreatmentDispositionComponent },

  // Patient Histories Routes
  { path: 'patient-histories/confirmation', component: HistoriesConfirmationComponent },

  // Hidden Navigation
  { path: 'nav', component: HiddenNavComponent },

  // Status Page Routes
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
