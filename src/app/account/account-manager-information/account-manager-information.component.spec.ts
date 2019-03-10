import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagerInformationComponent } from './account-manager-information.component';

describe('AccountManagerInformationComponent', () => {
  let component: AccountManagerInformationComponent;
  let fixture: ComponentFixture<AccountManagerInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountManagerInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountManagerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
