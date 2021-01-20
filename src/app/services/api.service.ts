import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, pipe} from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Expense } from '../models/expense.model';
import { ToDoItem } from '../models/TodoItem.model';
import { IToDoItem } from '../models/IToDoItem.Interface';
import { IRemoteTodoList } from '../models/IRemoteTodoList.interface';

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
  public getTodoList(): Observable<ToDoItem[]> {
	  return this.httpClient.get(this.apiURL + '/todo')
	  	.pipe(take(1))
	  	.pipe(
			map((response: IRemoteTodoList) => response.docs.map((response: IToDoItem) => ToDoItem.fromRemote(response)))
		);
  }

  public createToDo(todo: ToDoItem): Observable<any> {
    return this.httpClient.post(this.apiURL + '/todo', todo.toRemote());
  }
}
