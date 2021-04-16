import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCaloriesComponent } from './check-calories.component';

describe('CheckCaloriesComponent', () => {
  let component: CheckCaloriesComponent;
  let fixture: ComponentFixture<CheckCaloriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCaloriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
