import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentShipmentsComponent } from './current-shipments.component';

describe('CurrentShipmentsComponent', () => {
  let component: CurrentShipmentsComponent;
  let fixture: ComponentFixture<CurrentShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
