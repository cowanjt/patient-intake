import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit {

  public referral: string;
  public referrals: string[] = ['Friend', 'Online Search', 'Staff', 'Newspaper', 'Reputation', 'Yellow Pages'];

  constructor() { }

  ngOnInit() {
  }

}
