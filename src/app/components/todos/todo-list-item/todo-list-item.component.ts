import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from 'src/app/models/TodoItem.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todoItem: ToDoItem;
  @Input() index: boolean;
  @Output() todoItemDeleted = new EventEmitter<string>();
  @Output() todoItemToggleFinished = new EventEmitter<string>();

  isDone: boolean = false;
  constructor(private $apiService: ApiService) {}

  ngOnInit(): void {
    //   console.log(this.todoItem)
    // console.log(this.index)
  }

  deleteTodo() {
    console.log('delete:', this.todoItem);
    this.$apiService.deleteToDo(this.todoItem).subscribe((response) => {
      if (!!response && !!response.success) {
		console.log(response);
		this.todoItemDeleted.emit(this.todoItem._id);
      }
    });
  }

  toggleFinishToDo() {
    this.todoItem.toggleFinish();
    // console.log('toggle finish', this.todoItem);
    this.$apiService.finishToDo(this.todoItem).subscribe((response) => {
      if (!!response && !!response.success) {
        console.log(response);
        this.todoItemToggleFinished.emit(this.todoItem._id);
      }
    });
  }
}
