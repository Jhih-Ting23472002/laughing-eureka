import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBoardComponent } from './food-board.component';

describe('FoodBoardComponent', () => {
  let component: FoodBoardComponent;
  let fixture: ComponentFixture<FoodBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
