import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  private isRecovery = new BehaviorSubject<boolean>(false);

  public isRecovery$ = this.isRecovery.asObservable();

  constructor() {}

  setIsRecovery(state: boolean)
  {
    this.isRecovery.next(state);
  }

  getIsRecovery(): Observable<boolean>
  {
    return this.isRecovery.asObservable();
  }
}
