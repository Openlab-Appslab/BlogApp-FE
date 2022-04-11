import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadblogsComponent } from './unreadblogs.component';

describe('UnreadblogsComponent', () => {
  let component: UnreadblogsComponent;
  let fixture: ComponentFixture<UnreadblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreadblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
