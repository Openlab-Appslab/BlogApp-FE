import { Component, OnInit } from '@angular/core';
import { NewsletterService } from 'src/app/website/service/newsletter.service';
import { newsletter } from 'src/app/newsletter';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  public newsletter: newsletter[];


  constructor(
    private newsletterService: NewsletterService
  ) { }

  ngOnInit(): void {
    this.getAllNewsletter();
  }

  getAllNewsletter(){
    this.newsletterService.getAllNewsletter().subscribe(result => {
      console.log('user detail is ', result);
      this.newsletter = result;
    })
  }

}
