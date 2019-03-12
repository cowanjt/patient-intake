import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {

  public frmStepSeven: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.frmStepSeven = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepSeven = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
