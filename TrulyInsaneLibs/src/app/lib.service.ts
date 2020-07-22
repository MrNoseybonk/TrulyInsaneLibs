import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Words } from './Models/words';
import { Lib } from './Models/lib';
import { LibRequest } from './Models/lib-request';

@Injectable({
  providedIn: 'root'
})
export class LibService {
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private lib = new Lib();
  private librequest = new LibRequest();

  constructor(private http: HttpClient, private urlService: UrlService) { }

  public upload(fileName: string, fileContent: string): Observable<any> {
    if (fileName && fileContent) {
      const body = fileContent;
      return this.http.post<any>(this.urlService.getUrl() + 'lib', body,
        {headers: this.regHeaders, withCredentials: true })
        .pipe(map( resp => resp ));
    }
  }

  public createLib(fileContent: string, words: Words): Observable<any>
  {
    if (fileContent && words)
    {
      this.lib.lib = fileContent;
      this.librequest.lib = this.lib;
      this.librequest.words = words;

      console.log(this.librequest);

      return this.http.put<any>(this.urlService.getUrl() + 'lib', this.librequest, {headers: this.regHeaders, withCredentials: true })
        .pipe(map( resp => resp ));
    }
  }
}
