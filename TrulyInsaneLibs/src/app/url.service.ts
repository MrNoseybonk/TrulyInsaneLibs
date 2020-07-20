import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  getUrl(): string {
    return 'http://localhost:8080/trulyinsanelibs/';
  }
}
