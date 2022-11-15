import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedblogsComponent } from './likedblogs.component';

describe('LikedblogsComponent', () => {
  let component: LikedblogsComponent;
  let fixture: ComponentFixture<LikedblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedblogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
