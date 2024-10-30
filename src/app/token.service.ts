import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTO } from './models/user-to';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private authUrl = "http://localhost:8090/authenticate";
  private apiUrl = "http://localhost:8090/api1";

  constructor(private http: HttpClient) { }

  sendTokenRequest(jsonRequestBody: UserTO): Observable<string> {
    return this.http.post<string>(this.authUrl, jsonRequestBody, { responseType: 'text' as 'json' });
  }

  sendAuthRequest(token: string): Observable<string> {
    const headers = new HttpHeaders().append('Authorization', 'Bearer '+token);
    return this.http.get<string>(this.apiUrl, { headers:headers, responseType: 'text' as 'json' });
  }
}
