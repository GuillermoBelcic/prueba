import { Component, OnInit } from '@angular/core';
import { IToDoItem } from 'src/app/models/IToDoItem.Interface';
import { ToDoItem } from 'src/app/models/TodoItem.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: ToDoItem[] = [];
  loading: boolean = false;

  constructor(private $apiService: ApiService) { }

  ngOnInit(): void {
	  this.loading = true;
	this.$apiService.getTodoList()
	.subscribe((remoteTodoList: ToDoItem[]) => {
		this.todoList = remoteTodoList;
		this.loading = false;
		// console.log(this.todoList)
    });
  }
}
