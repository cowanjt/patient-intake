import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-safety-protocol',
  templateUrl: './safety-protocol.component.html',
  styleUrls: ['./safety-protocol.component.scss']
})
export class SafetyProtocolComponent implements OnInit {

  public choices: string[] = ['Yes', 'No'];

  public frmStepSixteen: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepSixteen = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepSixteen = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
