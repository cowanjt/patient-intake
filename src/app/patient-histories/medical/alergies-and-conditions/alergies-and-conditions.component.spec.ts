import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiesAndConditionsComponent } from './alergies-and-conditions.component';

describe('AlergiesAndConditionsComponent', () => {
  let component: AlergiesAndConditionsComponent;
  let fixture: ComponentFixture<AlergiesAndConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiesAndConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiesAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
