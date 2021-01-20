import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/TodoItem.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

	@Input() todoItem: ToDoItem;

  constructor() { }

  ngOnInit(): void {
	//   console.log(this.todoItem)
  }

}
