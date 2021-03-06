import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';
import { Person } from './Models/person';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public currentUser: Observable<Person>;
  private currentUserSubject: BehaviorSubject<Person>;
  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient, private urlService: UrlService) {
    this.currentUserSubject = new BehaviorSubject<Person>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   changeMessage(message: string) {
    this.messageSource.next(message);
  }

  login(username, password): Observable<any> {
    return this.http.post<any>(this.urlService.getUrl() + 'login', {username, password}).pipe(
      map( resp => { localStorage.setItem('currentUser', JSON.stringify(resp));
                     this.currentUserSubject.next(resp);
                     return resp; } )
    );
  }

  logout() {
    alert('You have logged out.');
    this.http.delete(this.urlService.getUrl() + 'login').subscribe(data => {});
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
