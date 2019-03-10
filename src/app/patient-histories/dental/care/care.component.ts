import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
