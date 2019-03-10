import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentDispositionComponent } from './treatment-disposition.component';

describe('TreatmentDispositionComponent', () => {
  let component: TreatmentDispositionComponent;
  let fixture: ComponentFixture<TreatmentDispositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentDispositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentDispositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
