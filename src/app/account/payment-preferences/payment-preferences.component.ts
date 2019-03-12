import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment-preferences',
  templateUrl: './payment-preferences.component.html',
  styleUrls: ['./payment-preferences.component.scss']
})
export class PaymentPreferencesComponent implements OnInit {

  public payment: string;

  public payments: string[] = ['Cash, Check, or Credit/Debit Card on Day of Treatment', 'Dillon Family Dental Gentle Dental Care Plan', 'Care Credit Card Payment'];

  public frmStepTwelve: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepTwelve = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepTwelve = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
