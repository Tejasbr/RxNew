import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsDefinitionComponent } from './rewards-definition.component';

describe('RewardsDefinitionComponent', () => {
  let component: RewardsDefinitionComponent;
  let fixture: ComponentFixture<RewardsDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
