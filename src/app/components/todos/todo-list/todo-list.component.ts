import { Component, OnInit } from '@angular/core';
import { IToDoItem } from 'src/app/models/ToDoItem.Interface';
import { ToDoItem } from 'src/app/models/todoItem.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: ToDoItem[] = [];

  constructor(private $apiService: ApiService) {}

  ngOnInit(): void {
    this.$apiService.getTodoList().subscribe((res: IToDoItem[]) => {
	  res.forEach((res: IToDoItem) => {
		this.todoList.push(res);
	  });
    });
  }
}
