import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { SaveRequest } from './Models/save-request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SavedcreateService {
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private urlService: UrlService) { }

  public getLibs(): Observable<any>
  {
    return this.http.get<any>(this.urlService.getUrl() + 'file/all', {headers: this.regHeaders, withCredentials: true })
      .pipe(map( resp => resp ));
  }

  public getLib(id: string): Observable<any>
  {
    return this.http.get<any>(this.urlService.getUrl() + 'file/' + id, {headers: this.regHeaders, withCredentials: true })
      .pipe(map( resp => resp ));
  }

  public saveLib(save: SaveRequest): Observable<any>
  {
    return this.http.post<any>(this.urlService.getUrl() + 'save', save, {headers: this.regHeaders, withCredentials: true })
      .pipe(map( resp => resp ));
  }
}
