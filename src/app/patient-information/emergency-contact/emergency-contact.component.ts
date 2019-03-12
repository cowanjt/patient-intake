import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.scss']
})
export class EmergencyContactComponent implements OnInit {

  public frmStepFive: FormGroup;

  public maritalStatus: string;

  public maritalStatuses: string[] = ['Single', 'Married', 'Separated', 'Divorced', 'Widowed'];

  constructor(private formBuilder: FormBuilder) {
    this.frmStepFive = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepFive = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
    });
  }

}
