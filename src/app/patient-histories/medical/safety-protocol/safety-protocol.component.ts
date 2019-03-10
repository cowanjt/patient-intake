import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-protocol',
  templateUrl: './safety-protocol.component.html',
  styleUrls: ['./safety-protocol.component.scss']
})
export class SafetyProtocolComponent implements OnInit {

  public choices: string[] = ['Yes', 'No'];

  constructor() { }

  ngOnInit() {
  }

}
