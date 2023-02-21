import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newsletter } from 'src/app/newsletter';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  addNewsletter(email: string){
    return fetch('http://localhost:8080/noAuth/addNewsletter',{
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

  getAllNewsletter(): Observable<newsletter[]>{
		return this.httpClient.get<newsletter[]>('http://localhost:8080/noAuth/getAllNewsletter');
	}
}
