import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { NewsletterService } from 'src/app/website/service/newsletter.service';
import { NewsletterComponent } from './newsletter.component';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;
  let newsletterService: NewsletterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ NewsletterService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    newsletterService = TestBed.inject(NewsletterService);
  });

  it('should check if newsletters are sent', fakeAsync(() => {
    const expectedNewsletter = [{ id: 1, email: 'test@gmail.com' }];
    spyOn(newsletterService, 'getAllNewsletter').and.returnValue(of(expectedNewsletter));
    fixture.detectChanges();
    tick();
    expect(component.newsletter).toEqual(expectedNewsletter);
  }));
});
