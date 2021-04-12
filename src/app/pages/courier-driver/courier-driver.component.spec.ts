import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierDriverComponent } from './courier-driver.component';

describe('CourierDriverComponent', () => {
  let component: CourierDriverComponent;
  let fixture: ComponentFixture<CourierDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
