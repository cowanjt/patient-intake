import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alergies-and-conditions',
  templateUrl: './alergies-and-conditions.component.html',
  styleUrls: ['./alergies-and-conditions.component.scss']
})
export class AlergiesAndConditionsComponent implements OnInit {

  public drugAllergen: string;
  public materialAllergen: string;
  public heartAilment: boolean;
  public highBloodPressure: boolean;
  public diabetes: boolean;
  public excessiveBleeding: boolean;
  public rheumaticFever: boolean;
  public kidneyDisease: boolean;
  public radiationTreatment: boolean;
  public allergies: boolean;
  public asthma: boolean;
  public seizures: boolean;
  public ulcers: boolean;
  public epilepsy: boolean;
  public stroke: boolean;
  public glaucoma: boolean;
  public herpes: boolean;
  public jointReplacement: boolean;
  public osteoporosis: boolean;
  public other: boolean;

  public drugAllergens: string[] = ['Penicillin', 'Local Anesthetic', 'Pain Medication', 'Other'];
  
  public materialAllergens: string[] = ['Latex', 'Plastics', 'Metals'];

  public frmStepFifteen: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frmStepFifteen = new FormGroup({});
  }

  ngOnInit() {
    this.frmStepFifteen = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      preferredConfirmation: []
    });
  }

}
