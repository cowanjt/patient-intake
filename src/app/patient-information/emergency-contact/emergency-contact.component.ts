import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.scss']
})
export class EmergencyContactComponent implements OnInit {

  public maritalStatus: string;

  public maritalStatuses: string[] = ['Single', 'Married', 'Separated', 'Divorced', 'Widowed'];

  constructor() { }

  ngOnInit() {
  }

}
