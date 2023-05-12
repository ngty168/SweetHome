import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFreshwaterComponent } from './category-freshwater.component';

describe('CategoryFreshwaterComponent', () => {
  let component: CategoryFreshwaterComponent;
  let fixture: ComponentFixture<CategoryFreshwaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFreshwaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFreshwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
