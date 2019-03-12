import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.scss']
})
export class AccountManagerComponent implements OnInit {

  public choice: string;

  public choices: string[] = ['Yes', 'No'];

  public frmStepTen: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepTen = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepTen = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
