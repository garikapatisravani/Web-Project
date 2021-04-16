import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietTypesComponent } from './diet-types.component';

describe('DietTypesComponent', () => {
  let component: DietTypesComponent;
  let fixture: ComponentFixture<DietTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
