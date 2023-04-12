import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NewsletterService } from '../../service/newsletter.service';
import { CommonNewsletterService } from '../../service/common-newsletter.service';
import { FooterComponent } from './footer.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let newsletterServiceSpy: NewsletterService;
  let commonNewsletterServiceSpy: CommonNewsletterService;

  beforeEach(async () => {
    const newsletterService = jasmine.createSpyObj('NewsletterService', ['addNewsletter']);
    const commonNewsletterService = jasmine.createSpyObj('CommonNewsletterService', ['notifyNewsletterEddition']);

    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ FooterComponent ],
      providers: [
        FormBuilder, HttpClient, HttpHandler,
        { provide: NewsletterService },
        { provide: CommonNewsletterService, useValue: commonNewsletterService }
      ]
    })
    .compileComponents();

    newsletterServiceSpy = TestBed.inject(NewsletterService);
    commonNewsletterServiceSpy = TestBed.inject(CommonNewsletterService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call newsletterService.addNewsletter() and commonNewsletterService.notifyNewsletterEddition() when addNewsletter() is called with a valid form', () => {
  //   const email = 'test@example.com';
  //   component.newsletterForm.setValue({ email });
  //   spyOn(newsletterServiceSpy, 'addNewsletter').and.callThrough();
  //   spyOn(commonNewsletterServiceSpy, 'notifyNewsletterEddition').and.callThrough();

  //   component.addNewsletter();

  //   expect(newsletterServiceSpy.addNewsletter).toHaveBeenCalledWith(email);
  //   expect(commonNewsletterServiceSpy.notifyNewsletterEddition).toHaveBeenCalled();
  // });

  it('should not call newsletterService.addNewsletter() or commonNewsletterService.notifyNewsletterEddition() when addNewsletter() is called with an invalid form', () => {
    spyOn(newsletterServiceSpy, 'addNewsletter').and.callThrough();
    component.addNewsletter();

    expect(newsletterServiceSpy.addNewsletter).not.toHaveBeenCalled();
    expect(commonNewsletterServiceSpy.notifyNewsletterEddition).not.toHaveBeenCalled();
  });
});
