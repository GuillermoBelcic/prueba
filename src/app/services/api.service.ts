import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL: string;

  constructor(private httpClient: HttpClient) {
    this.apiURL = environment.API_URL + '/api';
  }

  public getUsers(): Observable<object> {
    return this.httpClient.get(
      this.apiURL + '/users',
    );
  }

  public saveExpense(expense: Expense) {
	return this.httpClient.post(
		this.apiURL + '/expenses',
		expense
	  );
  }

//   ToDoList
  public getTodoList(): Observable<any> {
	  return this.httpClient.get(this.apiURL + '/todo');
  }
}
