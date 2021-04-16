import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionByNameComponent } from './nutrition-by-name.component';

describe('NutritionByNameComponent', () => {
  let component: NutritionByNameComponent;
  let fixture: ComponentFixture<NutritionByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
