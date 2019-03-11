import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';


import { State } from './models/state';
import { STATES } from './models/in-memory-states';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title = 'Dillon Family Dental';

  public stateControl = new FormControl('', [Validators.required]);
  public selectFormControl = new FormControl('', Validators.required);
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  

  public choice: string;
  public choices: string[] = ['Yes', 'No'];
 
  public states: State[] = STATES

  public constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle(this.title);
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}