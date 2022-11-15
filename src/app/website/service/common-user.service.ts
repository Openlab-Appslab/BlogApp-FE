import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonUserService {

  public editUser_Observable = new Subject();

  constructor() { }

  notifyUserEddition(){
    this.editUser_Observable.next();
  }
}
