import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private urlService: UrlService) { }

  public upload(fileName: string, fileContent: string): void {
    if (fileName && fileContent) {
      const body = fileContent;
      {this.http.post(this.urlService.getUrl() + 'lib', body,
        {headers: this.regHeaders, withCredentials: true})
        .pipe(finalize(() => {}))
        .subscribe(res => {
          alert('File Uploaded!');
          alert(res);
          location.reload();
        }, error => {
        });
      }
    }
  }
}
