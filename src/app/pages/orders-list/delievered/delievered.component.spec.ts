import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelieveredComponent } from './delievered.component';

describe('DelieveredComponent', () => {
  let component: DelieveredComponent;
  let fixture: ComponentFixture<DelieveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelieveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelieveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
