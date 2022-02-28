import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailrespondComponent } from './mailrespond.component';

describe('MailrespondComponent', () => {
  let component: MailrespondComponent;
  let fixture: ComponentFixture<MailrespondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailrespondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailrespondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
