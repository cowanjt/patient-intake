import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TermsAndConditionsRepsonse } from '../models/terms-and-conditions-repsonse';

@Component({
  selector: 'app-terms-and-conditions-dialog',
  templateUrl: './terms-and-conditions-dialog.component.html',
  styleUrls: ['./terms-and-conditions-dialog.component.scss']
})
export class TermsAndConditionsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TermsAndConditionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TermsAndConditionsRepsonse) {}

  public onDeclineClick(): void {
    this.dialogRef.close();
  }

}
