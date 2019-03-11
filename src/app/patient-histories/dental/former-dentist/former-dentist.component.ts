import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from "@angular/material";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProgressSpinnerDialogComponent } from '../../../progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-former-dentist',
  templateUrl: './former-dentist.component.html',
  styleUrls: ['./former-dentist.component.scss']
})
export class FormerDentistComponent implements OnInit {

  public frmStepFour: FormGroup;

  constructor(private router: Router, private dialog: MatDialog, private formBuilder: FormBuilder) { }

  public demoingProgressSpinner() {
    let observable = new Observable(this.myObservable);
    this.showProgressSpinnerUntilExecuted(observable);
  }

  ngOnInit() {
    this.frmStepFour = this.formBuilder.group({
      // Form Control Validators
    });
  }

  myObservable(observer) {
    setTimeout(() => {
      observer.next("done waiting for 5 sec");
      observer.complete();
    }, 5000);
  }

  showProgressSpinnerUntilExecuted(observable: Observable<Object>) {
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    let subscription = observable.subscribe(
      (response: any) => {
        subscription.unsubscribe();
        //handle response
        console.log(response);
        dialogRef.close();
        this.router.navigateByUrl('/form-completed');
      },
      (error) => {
        subscription.unsubscribe();
        //handle error
        dialogRef.close();
      }
    );
  }

}
