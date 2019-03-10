import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { State } from '../../models/state';
import { STATES } from '../../models/in-memory-states';

@Component({
  selector: 'app-mailing-address',
  templateUrl: './mailing-address.component.html',
  styleUrls: ['./mailing-address.component.scss']
})
export class MailingAddressComponent implements OnInit {

  public stateControl = new FormControl('', [Validators.required]);

  public states: State[] = STATES

  constructor() { }

  ngOnInit() {
  }

}
