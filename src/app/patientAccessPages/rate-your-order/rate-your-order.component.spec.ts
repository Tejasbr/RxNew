import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateYourOrderComponent } from './rate-your-order.component';

describe('RateYourOrderComponent', () => {
  let component: RateYourOrderComponent;
  let fixture: ComponentFixture<RateYourOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateYourOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateYourOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
