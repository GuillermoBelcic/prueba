import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/TodoItem.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

	@Input() todoItem: ToDoItem;

  constructor(private $apiService: ApiService) { }

  ngOnInit(): void {
	//   console.log(this.todoItem)
  }

  deleteTodo() {
	  console.log('delete:', this.todoItem)
		this.$apiService.deleteToDo(this.todoItem)
		.subscribe((response) => {
			if (!!response && !!response.success) {
				console.log(response);
			}
		});
  }

}
