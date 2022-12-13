import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonNewsletterService {

  constructor() { }

  public addNewsletter_Observable = new Subject();

  notifyNewsletterEddition(){
    this.addNewsletter_Observable.next();
  }
}
