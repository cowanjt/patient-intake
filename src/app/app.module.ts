import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTooltipModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatOptionModule, MatSelectModule, MatIconModule, MatStepperModule, MatAutocompleteModule,
  MatCardModule, MatCheckboxModule, MatButtonModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';

import { NgxMaskModule } from 'ngx-mask';
import { TermsAndConditionsDialogComponent } from './account/terms-and-conditions-dialog/terms-and-conditions-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
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
import { FormNavigationComponent } from './form-navigation/form-navigation.component';
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import { ProgressSpinnerDialogComponent } from './progress-spinner-dialog/progress-spinner-dialog.component';
import { FormCompleteComponent } from './form-complete/form-complete.component';


@NgModule({
  declarations: [
    AppComponent,
    TermsAndConditionsDialogComponent,
    BasicInformationComponent,
    PhysicalAddressComponent,
    MailingAddressComponent,
    ContactComponent,
    EmployerComponent,
    EmergencyContactComponent,
    EmergencyContactInformationComponent,
    ReferralComponent,
    VisitReasonComponent,
    AccountManagerComponent,
    AccountManagerInformationComponent,
    PaymentPreferencesComponent,
    TermsAndConditionsComponent,
    HistoriesConfirmationComponent,
    BasicComponent,
    AlergiesAndConditionsComponent,
    SafetyProtocolComponent,
    FormerDentistComponent,
    FormerDentistInformationComponent,
    CareComponent,
    XrayComponent,
    TreatmentDispositionComponent,
    PreviousTreatmentComponent,
    PageNotFoundComponent,
    FormSelectionComponent,
    HiddenNavComponent,
    FormNavigationComponent,
    FormStepperComponent,
    ProgressSpinnerDialogComponent,
    FormCompleteComponent,
  ],
  entryComponents: [
    TermsAndConditionsDialogComponent,
    ProgressSpinnerDialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatOptionModule,
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatStepperModule, 
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    NgxMaskModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
