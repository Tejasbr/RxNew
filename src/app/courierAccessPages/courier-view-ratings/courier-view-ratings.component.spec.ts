import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierViewRatingsComponent } from './courier-view-ratings.component';

describe('CourierViewRatingsComponent', () => {
  let component: CourierViewRatingsComponent;
  let fixture: ComponentFixture<CourierViewRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierViewRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierViewRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
