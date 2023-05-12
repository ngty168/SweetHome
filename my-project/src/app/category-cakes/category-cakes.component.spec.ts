import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCakesComponent } from './category-cakes.component';

describe('CategoryCakesComponent', () => {
  let component: CategoryCakesComponent;
  let fixture: ComponentFixture<CategoryCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
