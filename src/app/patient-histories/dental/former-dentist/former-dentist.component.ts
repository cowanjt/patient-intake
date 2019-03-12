import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from "@angular/material";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProgressSpinnerDialogComponent } from '../../../progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-former-dentist',
  templateUrl: './former-dentist.component.html',
  styleUrls: ['./former-dentist.component.scss']
})
export class FormerDentistComponent implements OnInit {

  public frmStepY: FormGroup;

  public frmStepSeventeen: FormGroup;

  constructor(private router: Router, private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.frmStepSeventeen = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepSeventeen = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
