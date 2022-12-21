import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogComponent } from '../dialog/dialog.component';

import { MainblogComponent } from './mainblog.component';

describe('MainblogComponent', () => {
  let component: MainblogComponent;
  let fixture: ComponentFixture<MainblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainblogComponent ],
      providers:[HttpClient, HttpHandler, MatDialog, Overlay],
      imports: [RouterTestingModule, DialogComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
