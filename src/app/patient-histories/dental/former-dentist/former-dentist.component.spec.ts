import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerDentistComponent } from './former-dentist.component';

describe('FormerDentistComponent', () => {
  let component: FormerDentistComponent;
  let fixture: ComponentFixture<FormerDentistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerDentistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
