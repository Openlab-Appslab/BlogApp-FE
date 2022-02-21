import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCreatePostComponent } from './u-create-post.component';

describe('UCreatePostComponent', () => {
  let component: UCreatePostComponent;
  let fixture: ComponentFixture<UCreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCreatePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
