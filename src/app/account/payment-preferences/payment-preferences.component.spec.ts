import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPreferencesComponent } from './payment-preferences.component';

describe('PaymentPreferencesComponent', () => {
  let component: PaymentPreferencesComponent;
  let fixture: ComponentFixture<PaymentPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
