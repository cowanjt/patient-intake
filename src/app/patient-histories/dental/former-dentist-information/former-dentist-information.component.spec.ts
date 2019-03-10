import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerDentistInformationComponent } from './former-dentist-information.component';

describe('FormerDentistInformationComponent', () => {
  let component: FormerDentistInformationComponent;
  let fixture: ComponentFixture<FormerDentistInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerDentistInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerDentistInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
