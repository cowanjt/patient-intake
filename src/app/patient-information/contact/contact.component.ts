import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public frmStepTwo: FormGroup;

  public confirmations: string[] = ['E-mail', 'Text Message', 'Phone Call'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.frmStepTwo = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
