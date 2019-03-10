import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { State } from '../../../models/state';
import { STATES } from '../../../models/in-memory-states';

@Component({
  selector: 'app-former-dentist-information',
  templateUrl: './former-dentist-information.component.html',
  styleUrls: ['./former-dentist-information.component.scss']
})
export class FormerDentistInformationComponent implements OnInit {

  public stateControl = new FormControl('', [Validators.required]);

  public states: State[] = STATES

  constructor() { }

  ngOnInit() {
  }

}
