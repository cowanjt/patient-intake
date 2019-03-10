import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.scss']
})
export class AccountManagerComponent implements OnInit {

  public choice: string;

  public choices: string[] = ['Yes', 'No'];

  constructor() { }

  ngOnInit() {
  }

}
