import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor() { }

  addNewsletter(email: string){
    return fetch('http://localhost:8080/NoAuth/addnewsletter',{
      method: 'POST',
      headers: new Headers ({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        email
      })
    })
    .catch((error) => {
      console.log('Error:', error);
    })
  }
}
