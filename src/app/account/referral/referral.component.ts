import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit {

  public referral: string;
  public referrals: string[] = ['Friend', 'Online Search', 'Staff', 'Newspaper', 'Reputation', 'Yellow Pages'];

  public frmStepEight: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepEight = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepEight = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
