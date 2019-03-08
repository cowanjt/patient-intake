import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { State } from './models/state';
import { TimePeriod } from './models/time-period';
import { TermsAndConditionsRepsonse } from './models/terms-and-conditions-repsonse';
import { STATES } from './models/in-memory-states';
import { TIMEPERIODS } from './models/in-memory-time-periods';
import { MatDialog } from '@angular/material';
import { TermsAndConditionsDialogComponent } from './terms-and-conditions-dialog/terms-and-conditions-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = 'Dillon Family Dental | Patient Intake';

  public firstNameControl = new FormControl('', [Validators.required]);
  public lastNameControl = new FormControl('', [Validators.required]);
  public firstNameManagerControl = new FormControl('', [Validators.required]);
  public lastNameManagerControl = new FormControl('', [Validators.required]);
  public ssnControl = new FormControl('', [Validators.required]);
  public dobControl = new FormControl('', [Validators.required]);
  public stateControl = new FormControl('', [Validators.required]);
  public selectFormControl = new FormControl('', Validators.required);
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public preferredConfirmation: string;
  public maritalStatus: string;
  public referral: string;
  public choice: string;
  public termsAndConditionsResponse: TermsAndConditionsRepsonse;

  public confirmations: string[] = ['E-mail', 'Text Message', 'Phone Call'];
  public states: State[] = STATES
  public timePeriods: TimePeriod[] = TIMEPERIODS;
  public maritalStatuses: string[] = ['Single', 'Married', 'Separated', 'Divorced', 'Widowed'];
  public referrals: string[] = ['Friend', 'Online Search', 'Staff', 'Newspaper', 'Reputation', 'Yellow Pages'];
  public choices: string[] = ['Yes', 'No'];
  public payments: string[] = ['Cash, Check, or Credit/Debit Card on Day of Treatment', 'Dillon Family Dental Gentle Dental Care Plan', 'Care Credit Card Payment'];
  public drugAllergens: string[] = ['Penicillin', 'Local Anesthetic', 'Pain Medication', 'Other'];
  public materialAllergens: string[] = ['Latex', 'Plastics', 'Metals'];
  public dentalTreatmentDispositions: string[] = ['None', 'Slightly', 'Moderately', 'Extremely'];

  public constructor(private titleService: Title, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.setTitle(this.title);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
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