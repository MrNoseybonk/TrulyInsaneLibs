import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Uploadrequest } from './Models/uploadrequest';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private uploadRequest = new Uploadrequest();

  constructor(private http: HttpClient, private urlService: UrlService) { }

  public upload(fileName: string, fileContent: string): Observable<any> {
    if (fileName && fileContent) {
      const body = fileContent;
      return this.http.post<any>(this.urlService.getUrl() + 'lib', body,
        {headers: this.regHeaders, withCredentials: true })
        .pipe(map( resp => resp ));
    }
  }

  public uploadTemplate(fileName: string, libName: string, fileContent: string): Observable<any> {
     if (fileName && libName && fileContent) {
      this.uploadRequest.libName = libName;
      this.uploadRequest.lib = fileContent;
      console.log(this.uploadRequest);
      return this.http.post<any>(this.urlService.getUrl() + 'file', this.uploadRequest,
      {headers: this.regHeaders, withCredentials: true })
      .pipe(map( resp => resp ));
    }
   }

   public deleteTemplate(id: string): Observable<any>
   {
    return this.http.delete(this.urlService.getUrl() + 'file/delete/' + id, {headers: this.regHeaders, withCredentials: true });
   }
}
