import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-treatment-disposition',
  templateUrl: './treatment-disposition.component.html',
  styleUrls: ['./treatment-disposition.component.scss']
})
export class TreatmentDispositionComponent implements OnInit {

  public dentalTreatmentDispositions: string[] = ['None', 'Slightly', 'Moderately', 'Extremely'];

  public frmStepTwentyOne: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepTwentyOne = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepTwentyOne = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
