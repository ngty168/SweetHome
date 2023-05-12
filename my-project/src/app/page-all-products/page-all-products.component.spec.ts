import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllProductsComponent } from './page-all-products.component';

describe('PageAllProductsComponent', () => {
  let component: PageAllProductsComponent;
  let fixture: ComponentFixture<PageAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAllProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
