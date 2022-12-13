import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { newsletter } from 'src/app/newsletter';
import { CommonNewsletterService } from '../../service/common-newsletter.service';
import { NewsletterService } from '../../service/newsletter.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private newsletterService: NewsletterService,
    private commonNewsletterService: CommonNewsletterService
  ) { }

  form: FormGroup;

  ngOnInit(): void {
  }

  newsletterForm = new FormGroup({
    email: new FormControl('', Validators.required)
  })


  addNewsletter(): void {
    if(this.newsletterForm.valid){
      const email = this.newsletterForm.value.email;

      this.newsletterService.addNewsletter(email).then(res =>{
        this.commonNewsletterService.notifyNewsletterEddition();
      });
    }
  }

  // test(){
  //   console.log(this.newsletterForm.value);
  // }


}
