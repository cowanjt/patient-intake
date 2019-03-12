import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { State } from '../../models/state';
import { STATES } from '../../models/in-memory-states';

@Component({
  selector: 'app-mailing-address',
  templateUrl: './mailing-address.component.html',
  styleUrls: ['./mailing-address.component.scss']
})
export class MailingAddressComponent implements OnInit {

  public frmStepThree: FormGroup;

  public states: State[] = STATES

  constructor(private formBuilder: FormBuilder) {
    this.frmStepThree = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepThree = this.formBuilder.group({
      state: []
    });
  }

}
