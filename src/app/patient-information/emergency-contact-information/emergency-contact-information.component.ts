import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { State } from '../../models/state';
import { STATES } from '../../models/in-memory-states';

@Component({
  selector: 'app-emergency-contact-information',
  templateUrl: './emergency-contact-information.component.html',
  styleUrls: ['./emergency-contact-information.component.scss']
})
export class EmergencyContactInformationComponent implements OnInit {

  public stateControl = new FormControl('', [Validators.required]);

  public states: State[] = STATES

  constructor() { }

  ngOnInit() {
  }

}
