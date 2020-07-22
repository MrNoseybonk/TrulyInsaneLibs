import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Words } from './Models/words';

@Injectable({
  providedIn: 'root'
})
export class LibService {
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private urlService: UrlService) { }

  public upload(fileName: string, fileContent: string): Observable<any> {
    if (fileName && fileContent) {
      const body = fileContent;
      return this.http.post<any>(this.urlService.getUrl() + 'lib', body,
        {headers: this.regHeaders, withCredentials: true })
        .pipe(map( resp => resp ));
    }
  }

  public createLib(words: Words): Observable<any>
  {
    if (words)
    {
      return this.http.put<any>(this.urlService.getUrl() + 'lib', words, {headers: this.regHeaders, withCredentials: true })
        .pipe(map( resp => resp ));
    }
  }
}
