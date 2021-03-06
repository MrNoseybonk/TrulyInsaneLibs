import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
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

  public createLib(fileContent: string, words: Words): Observable<any>
  {
    if (fileContent && words)
    {
      this.lib.lib = fileContent;
      this.librequest.lib = this.lib;
      this.librequest.words = words;

      return this.http.put<any>(this.urlService.getUrl() + 'lib', this.librequest, {headers: this.regHeaders, withCredentials: true })
        .pipe(map( resp => resp ));
    }
  }
}
