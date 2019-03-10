import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
