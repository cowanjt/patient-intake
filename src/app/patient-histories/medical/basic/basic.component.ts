import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  public choices: string[] = ['Yes', 'No'];

  public frmStepFourteen: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepFourteen = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepFourteen = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
