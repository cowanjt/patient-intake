import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { State } from '../../models/state';
import { STATES } from '../../models/in-memory-states';

@Component({
  selector: 'app-physical-address',
  templateUrl: './physical-address.component.html',
  styleUrls: ['./physical-address.component.scss']
})
export class PhysicalAddressComponent implements OnInit {

  public checked: boolean;

  public frmStepTwo: FormGroup;

  public states: State[] = STATES

  constructor(private formBuilder: FormBuilder) {
    this.frmStepTwo = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepTwo = this.formBuilder.group({
      //state: ['', [Validators.required]]
      state: []
    });
  }

}
