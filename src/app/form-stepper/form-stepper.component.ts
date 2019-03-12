import { Component, ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

// Patient Information Components
import { BasicInformationComponent } from './../patient-information/basic-information/basic-information.component';
import { PhysicalAddressComponent } from './../patient-information/physical-address/physical-address.component';
import { MailingAddressComponent } from './../patient-information/mailing-address/mailing-address.component';
import { ContactComponent } from './../patient-information/contact/contact.component';
import { EmergencyContactComponent } from './../patient-information/emergency-contact/emergency-contact.component';
import { EmergencyContactInformationComponent } from './../patient-information/emergency-contact-information/emergency-contact-information.component';

// Account Components
import { EmployerComponent } from './../account/employer/employer.component';
import { ReferralComponent } from './../account/referral/referral.component';
import { VisitReasonComponent } from './../account/visit-reason/visit-reason.component';
import { AccountManagerComponent } from './../account/account-manager/account-manager.component';
import { AccountManagerInformationComponent } from './../account/account-manager-information/account-manager-information.component';
import { PaymentPreferencesComponent } from './../account/payment-preferences/payment-preferences.component';
import { TermsAndConditionsComponent } from './../account/terms-and-conditions/terms-and-conditions.component';

// Patient Histories - Medical Components
import { BasicComponent } from './../patient-histories/medical/basic/basic.component';
import { AlergiesAndConditionsComponent } from './../patient-histories/medical/alergies-and-conditions/alergies-and-conditions.component';
import { SafetyProtocolComponent } from './../patient-histories/medical/safety-protocol/safety-protocol.component';

// Patient Histories - Dental Components
import { FormerDentistComponent } from './../patient-histories/dental/former-dentist/former-dentist.component';
import { FormerDentistInformationComponent } from './../patient-histories/dental/former-dentist-information/former-dentist-information.component';
import { CareComponent } from './../patient-histories/dental/care/care.component';
import { XrayComponent } from './../patient-histories/dental/xray/xray.component';
import { TreatmentDispositionComponent } from './../patient-histories/dental/treatment-disposition/treatment-disposition.component';
import { PreviousTreatmentComponent } from './../patient-histories/dental/previous-treatment/previous-treatment.component';
import { HistoriesConfirmationComponent } from './../patient-histories/histories-confirmation/histories-confirmation.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.scss']
})
export class FormStepperComponent {

  // Patient Information Components
  @ViewChild(BasicInformationComponent) stepOneComponent: BasicInformationComponent;
  @ViewChild(PhysicalAddressComponent) stepTwoComponent: PhysicalAddressComponent;
  @ViewChild(MailingAddressComponent) stepThreeComponent: MailingAddressComponent;
  @ViewChild(ContactComponent) stepFourComponent: ContactComponent;
  @ViewChild(EmergencyContactComponent) stepFiveComponent: EmergencyContactComponent;
  @ViewChild(EmergencyContactInformationComponent) stepSixComponent: EmergencyContactInformationComponent;

  // Account Components
  @ViewChild(EmployerComponent) stepSevenComponent: EmployerComponent;
  @ViewChild(ReferralComponent) stepEightComponent: ReferralComponent;
  @ViewChild(VisitReasonComponent) stepNineComponent: VisitReasonComponent;
  @ViewChild(AccountManagerComponent) stepTenComponent: AccountManagerComponent;
  @ViewChild(AccountManagerInformationComponent) stepElevenComponent: AccountManagerInformationComponent;
  @ViewChild(PaymentPreferencesComponent) stepTwelveComponent: PaymentPreferencesComponent;
  @ViewChild(TermsAndConditionsComponent) stepThirteenComponent: TermsAndConditionsComponent;

  // Patient Histories - Medical Components
  @ViewChild(BasicComponent) stepFourteenComponent: BasicComponent;
  @ViewChild(AlergiesAndConditionsComponent) stepFifteenComponent: AlergiesAndConditionsComponent
  @ViewChild(SafetyProtocolComponent) stepSixteenComponent: SafetyProtocolComponent

  // Patient Histories - Dental Components
  @ViewChild(FormerDentistComponent) stepSeventeenComponent: FormerDentistComponent;
  @ViewChild(FormerDentistInformationComponent) stepEightteenComponent: FormerDentistInformationComponent;
  @ViewChild(CareComponent) stepNineteenComponent: CareComponent;
  @ViewChild(XrayComponent) stepTwentyComponent: XrayComponent;
  @ViewChild(TreatmentDispositionComponent) stepTwentyOneComponent: TreatmentDispositionComponent;
  @ViewChild(PreviousTreatmentComponent) stepTwentyTwoComponent: PreviousTreatmentComponent;
  @ViewChild(HistoriesConfirmationComponent) stepTwentyThreeComponent: HistoriesConfirmationComponent;

  constructor() {}

  get frmStepOne() {
    return this.stepOneComponent ? this.stepOneComponent.frmStepOne : null;
  }

  get frmStepTwo() {
    return this.stepTwoComponent ? this.stepTwoComponent.frmStepTwo : null;
  }

  get frmStepThree() {
    return this.stepThreeComponent ? this.stepThreeComponent.frmStepThree : null;
  }

  get frmStepFour() {
    return this.stepFourComponent ? this.stepFourComponent.frmStepFour : null;
  }

  get frmStepFive() {
    return this.stepFiveComponent ? this.stepFiveComponent.frmStepFive : null;
  }

  get frmStepSix() {
    return this.stepSixComponent ? this.stepSixComponent.frmStepSix : null;
  }

  get frmStepSeven() {
    return this.stepSevenComponent ? this.stepSevenComponent.frmStepSeven : null;
  }

  get frmStepEight() {
    return this.stepEightComponent ? this.stepEightComponent.frmStepEight : null;
  }

  get frmStepNine() {
    return this.stepNineComponent ? this.stepNineComponent.frmStepNine : null;
  }

  get frmStepTen() {
    return this.stepTenComponent ? this.stepTenComponent.frmStepTen : null;
  }

  get frmStepEleven() {
    return this.stepElevenComponent ? this.stepElevenComponent.frmStepEleven : null;
  }

  get frmStepTwelve() {
    return this.stepTwelveComponent ? this.stepTwelveComponent.frmStepTwelve : null;
  }

  get frmStepThirteen() {
    return this.stepThirteenComponent ? this.stepThirteenComponent.frmStepThirteen : null;
  }

  get frmStepFourteen() {
    return this.stepFourteenComponent ? this.stepFourteenComponent.frmStepFourteen : null;
  }

  get frmStepFifteen() {
    return this.stepFifteenComponent ? this.stepFifteenComponent.frmStepFifteen : null;
  }

  get frmStepSixteen() {
    return this.stepSixteenComponent ? this.stepSixteenComponent.frmStepSixteen : null;
  }

  get frmStepSeventeen() {
    return this.stepSeventeenComponent ? this.stepSeventeenComponent.frmStepSeventeen : null;
  }

  get frmStepEighteen() {
    return this.stepEightteenComponent ? this.stepEightteenComponent.frmStepEighteen : null;
  }

  get frmStepNineteen() {
    return this.stepNineteenComponent ? this.stepNineteenComponent.frmStepNineteen : null;
  }

  get frmStepTwenty() {
    return this.stepTwentyComponent ? this.stepTwentyComponent.frmStepTwenty : null;
  }

  get frmStepTwentyOne() {
    return this.stepTwentyOneComponent ? this.stepTwentyOneComponent.frmStepTwentyOne : null;
  }

  get frmStepTwentyTwo() {
    return this.stepTwentyTwoComponent ? this.stepTwentyTwoComponent.frmStepTwentyTwo : null;
  }

  get frmStepTwentyThree() {
    return this.stepTwentyThreeComponent ? this.stepTwentyThreeComponent.frmStepTwentyThree : null;
  }

}
