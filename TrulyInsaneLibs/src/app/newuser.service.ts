import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';
import { Person } from './Models/person';

@Injectable({
  providedIn: 'root'
})
export class NewuserService {
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

  register(username, password): Observable<any> {
    return this.http.post<any>(this.urlService.getUrl() + 'login/register', {username, password}).pipe(
      map( resp => resp )
    );
  }

  checkUsername(username): Observable<any> {
    return this.http.get<any>(this.urlService.getUrl() + 'login/' + username).pipe(
      map( resp => resp )
    );
  }
}
