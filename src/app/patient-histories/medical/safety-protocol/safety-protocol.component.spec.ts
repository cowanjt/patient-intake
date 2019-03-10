import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyProtocolComponent } from './safety-protocol.component';

describe('SafetyProtocolComponent', () => {
  let component: SafetyProtocolComponent;
  let fixture: ComponentFixture<SafetyProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
