import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '../../models/state';
import { STATES } from '../../models/in-memory-states';

@Component({
  selector: 'app-account-manager-information',
  templateUrl: './account-manager-information.component.html',
  styleUrls: ['./account-manager-information.component.scss']
})
export class AccountManagerInformationComponent implements OnInit {

  public states: State[] = STATES

  public stateControl = new FormControl('', [Validators.required]);
  public firstNameManagerControl = new FormControl('', [Validators.required]);
  public lastNameManagerControl = new FormControl('', [Validators.required]);

  public frmStepEleven: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepEleven = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepEleven = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
