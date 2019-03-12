import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.scss']
})
export class CareComponent implements OnInit {

  public unfavorableRections: string;
  public oralSatisfaction: string;
  public toothLossConcern: string;
  public gumDisease: string;
  public halitosisInformation: string;

  public choices: string[] = ['Yes', 'No'];

  public frmStepNineteen: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepNineteen = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepNineteen = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
