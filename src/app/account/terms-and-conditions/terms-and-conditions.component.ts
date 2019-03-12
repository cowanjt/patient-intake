import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TermsAndConditionsRepsonse } from '../../models/terms-and-conditions-repsonse';
import { TermsAndConditionsDialogComponent } from '../terms-and-conditions-dialog/terms-and-conditions-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {

  public termsAndConditionsResponse: TermsAndConditionsRepsonse;

  public frmStepThirteen: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.frmStepThirteen = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepThirteen = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(TermsAndConditionsDialogComponent, {
      width: '650px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.termsAndConditionsResponse = result;
    });
  }

}
