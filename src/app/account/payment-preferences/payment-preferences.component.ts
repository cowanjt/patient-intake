import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-preferences',
  templateUrl: './payment-preferences.component.html',
  styleUrls: ['./payment-preferences.component.scss']
})
export class PaymentPreferencesComponent implements OnInit {

  public payment: string;

  public payments: string[] = ['Cash, Check, or Credit/Debit Card on Day of Treatment', 'Dillon Family Dental Gentle Dental Care Plan', 'Care Credit Card Payment'];

  constructor() { }

  ngOnInit() {
  }

}
