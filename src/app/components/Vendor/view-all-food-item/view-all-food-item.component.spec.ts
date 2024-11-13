import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllFoodItemComponent } from './view-all-food-item.component';

describe('ViewAllFoodItemComponent', () => {
  let component: ViewAllFoodItemComponent;
  let fixture: ComponentFixture<ViewAllFoodItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllFoodItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
