import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuaranteeComponent } from './guarantee.component';

describe('GuaranteeComponent', () => {
  let component: GuaranteeComponent;
  let fixture: ComponentFixture<GuaranteeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuaranteeComponent]
    });
    fixture = TestBed.createComponent(GuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
