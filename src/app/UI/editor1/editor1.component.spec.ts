import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editor1Component } from './editor1.component';

describe('Editor1Component', () => {
  let component: Editor1Component;
  let fixture: ComponentFixture<Editor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editor1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
