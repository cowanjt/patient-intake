import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-visit-reason',
  templateUrl: './visit-reason.component.html',
  styleUrls: ['./visit-reason.component.scss']
})
export class VisitReasonComponent implements OnInit {

  public frmStepNine: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepNine = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepNine = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
