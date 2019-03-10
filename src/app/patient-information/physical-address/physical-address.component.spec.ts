import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalAddressComponent } from './physical-address.component';

describe('PhysicalAddressComponent', () => {
  let component: PhysicalAddressComponent;
  let fixture: ComponentFixture<PhysicalAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
