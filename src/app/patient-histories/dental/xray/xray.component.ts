import { Component, OnInit } from '@angular/core';
import { TimePeriod } from '../../../models/time-period';
import { TIMEPERIODS } from '../../../models/in-memory-time-periods';

@Component({
  selector: 'app-xray',
  templateUrl: './xray.component.html',
  styleUrls: ['./xray.component.scss']
})
export class XrayComponent implements OnInit {

  public choices: string[] = ['Yes', 'No'];

  public dentalTreatmentDispositions: string[] = ['None', 'Slightly', 'Moderately', 'Extremely'];

  public timePeriods: TimePeriod[] = TIMEPERIODS;

  public amount: string;

  public timePeriod: TimePeriod;

  public fullXray: string;

  constructor() { }

  ngOnInit() {
  }

}
