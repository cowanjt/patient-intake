import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  public firstNameControl = new FormControl('', [Validators.required]);
  public lastNameControl = new FormControl('', [Validators.required]);
  public dobControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

}
