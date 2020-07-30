import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaveviewService {
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private urlService: UrlService) { }

  public getViews(id: number): Observable<any>
  {
    return this.http.get<any>(this.urlService.getUrl() + 'save/all/' + id, {headers: this.regHeaders, withCredentials: true })
      .pipe(map( resp => resp ));
  }
}
