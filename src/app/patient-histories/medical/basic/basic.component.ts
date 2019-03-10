import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  public choices: string[] = ['Yes', 'No'];

  constructor() { }

  ngOnInit() {
  }

}
