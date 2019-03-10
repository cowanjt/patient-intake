import { Component, OnInit } from '@angular/core';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  public openDialog(): void {
    const dialogRef = this.dialog.open(TermsAndConditionsDialogComponent, {
      width: '650px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.termsAndConditionsResponse = result;
    });
  }

}
