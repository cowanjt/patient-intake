import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public stateControl = new FormControl('', [Validators.required]);
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public preferredConfirmation: string;

  public confirmations: string[] = ['E-mail', 'Text Message', 'Phone Call'];

  constructor() { }

  ngOnInit() {
  }

}
