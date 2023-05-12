import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHotComponent } from './group-hot.component';

describe('GroupHotComponent', () => {
  let component: GroupHotComponent;
  let fixture: ComponentFixture<GroupHotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupHotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
