import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSimilarProductComponent } from './section-similar-product.component';

describe('SectionSimilarProductComponent', () => {
  let component: SectionSimilarProductComponent;
  let fixture: ComponentFixture<SectionSimilarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSimilarProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSimilarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
