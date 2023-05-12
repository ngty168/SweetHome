import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductComponent } from './section-product.component';

describe('SectionProductComponent', () => {
  let component: SectionProductComponent;
  let fixture: ComponentFixture<SectionProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
