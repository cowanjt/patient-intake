import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriesConfirmationComponent } from './histories-confirmation.component';

describe('HistoriesConfirmationComponent', () => {
  let component: HistoriesConfirmationComponent;
  let fixture: ComponentFixture<HistoriesConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriesConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriesConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
