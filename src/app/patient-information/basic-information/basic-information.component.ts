import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  public frmStepOne: FormGroup;
  public firstNameControl = new FormControl('', [Validators.required]);
  public lastNameControl = new FormControl('', [Validators.required]);
  public dobControl = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {
    // TODO: FormGroup constructor wants form controls passed into it. Research if necessary for project.
    // As of now, an empty object is being passed in.
    this.frmStepOne = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepOne = this.formBuilder.group({
    });
  }

}
