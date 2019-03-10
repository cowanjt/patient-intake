import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { State } from '../../models/state';
import { STATES } from '../../models/in-memory-states';

@Component({
  selector: 'app-physical-address',
  templateUrl: './physical-address.component.html',
  styleUrls: ['./physical-address.component.scss']
})
export class PhysicalAddressComponent implements OnInit {

  public checked: boolean;

  public stateControl = new FormControl('', [Validators.required]);

  public states: State[] = STATES

  constructor() { }

  ngOnInit() {
  }

}
