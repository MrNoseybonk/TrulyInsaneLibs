import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';
import { User } from '../app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private urlService: UrlService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  login(username, password): Observable<any> {
    return this.http.post<any>(this.urlService.getUrl() + 'login', {username, password}).pipe(
      map( resp => { localStorage.setItem('currentUser', JSON.stringify(resp));
                     this.currentUserSubject.next(resp);
                     return resp; } )
    );
  }

  logout() {
    alert('You have logged out.')
    this.http.delete(this.urlService.getUrl() + 'login').subscribe(data => {});
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
