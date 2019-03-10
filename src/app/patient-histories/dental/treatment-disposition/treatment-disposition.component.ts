import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment-disposition',
  templateUrl: './treatment-disposition.component.html',
  styleUrls: ['./treatment-disposition.component.scss']
})
export class TreatmentDispositionComponent implements OnInit {

  public dentalTreatmentDispositions: string[] = ['None', 'Slightly', 'Moderately', 'Extremely'];

  constructor() { }

  ngOnInit() {
  }

}
