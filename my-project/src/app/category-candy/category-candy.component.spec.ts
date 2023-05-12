import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCandyComponent } from './category-candy.component';

describe('CategoryCandyComponent', () => {
  let component: CategoryCandyComponent;
  let fixture: ComponentFixture<CategoryCandyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCandyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
