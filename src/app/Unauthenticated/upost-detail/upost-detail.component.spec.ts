import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpostDetailComponent } from './upost-detail.component';

describe('UpostDetailComponent', () => {
  let component: UpostDetailComponent;
  let fixture: ComponentFixture<UpostDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpostDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
