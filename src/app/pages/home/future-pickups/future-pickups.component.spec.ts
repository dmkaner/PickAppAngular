import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePickupsComponent } from './future-pickups.component';

describe('FuturePickupsComponent', () => {
  let component: FuturePickupsComponent;
  let fixture: ComponentFixture<FuturePickupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturePickupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturePickupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
