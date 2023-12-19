import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private colorSubject = new BehaviorSubject<string>('#F2F5F9');
  public color$ = this.colorSubject.asObservable();

  setBackgroundColor(color: string) {
    this.colorSubject.next(color);
  }
}
