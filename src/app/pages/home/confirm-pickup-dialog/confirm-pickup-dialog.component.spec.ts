import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPickupDialogComponent } from './confirm-pickup-dialog.component';

describe('ConfirmPickupDialogComponent', () => {
  let component: ConfirmPickupDialogComponent;
  let fixture: ComponentFixture<ConfirmPickupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmPickupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPickupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
