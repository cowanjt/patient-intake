import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public frmStepFour: FormGroup;

  public confirmations: string[] = ['E-mail', 'Text Message', 'Phone Call'];

  constructor(private formBuilder: FormBuilder) {
    this.frmStepFour = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepFour = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      email: [],
      preferredConfirmation: []
    });
  }

}
