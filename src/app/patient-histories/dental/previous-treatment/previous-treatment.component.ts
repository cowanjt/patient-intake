import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimePeriod } from '../../../models/time-period';
import { TIMEPERIODS } from '../../../models/in-memory-time-periods';

@Component({
  selector: 'app-previous-treatment',
  templateUrl: './previous-treatment.component.html',
  styleUrls: ['./previous-treatment.component.scss']
})
export class PreviousTreatmentComponent implements OnInit {

  public timePeriods: TimePeriod[] = TIMEPERIODS;

  public amount: string;

  public frmStepTwentyTwo: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepTwentyTwo = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepTwentyTwo = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
