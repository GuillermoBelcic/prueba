import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL: string;



  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.API_URL;
  }

  public getUsers(): Observable<object> {
    return this.httpClient.get(
      this.apiURL + '/users',
    );
  }
}
