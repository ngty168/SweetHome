import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySnackComponent } from './category-snack.component';

describe('CategorySnackComponent', () => {
  let component: CategorySnackComponent;
  let fixture: ComponentFixture<CategorySnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
