import { Component, ViewChild, Input } from '@angular/core';
import { BasicInformationComponent } from './../patient-information/basic-information/basic-information.component';
import { ContactComponent } from './../patient-information/contact/contact.component';
import { BasicComponent } from './../patient-histories/medical/basic/basic.component';
import { FormerDentistComponent } from './../patient-histories/dental/former-dentist/former-dentist.component';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.scss']
})
export class FormStepperComponent {

  @ViewChild(BasicInformationComponent) stepOneComponent: BasicInformationComponent;
  @ViewChild(ContactComponent) stepTwoComponent: ContactComponent;
  @ViewChild(BasicComponent) stepThreeComponent: BasicComponent;
  @ViewChild(FormerDentistComponent) stepFourComponent: FormerDentistComponent;

  constructor() { }

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
}
