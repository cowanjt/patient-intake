import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  public choices: string[] = ['Yes', 'No'];

  public frmStepThree: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frmStepThree = this.formBuilder.group({
      // Form Control Validators
    });
  }

}
