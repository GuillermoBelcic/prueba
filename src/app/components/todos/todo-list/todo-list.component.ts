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
    
		this.todoList = this.reorderTodoList(remoteTodoList);
		this.loading = false;
		// console.log(this.todoList)
    });
  }

  private reorderTodoList(remoteList: ToDoItem[]) {
    let returnList: ToDoItem[] = [];
    const unfinishedTodos: ToDoItem[] = remoteList.filter((todoItem: ToDoItem) => !todoItem.finished);
    const finishedTodos: ToDoItem[] = remoteList.filter((todoItem: ToDoItem) => !!todoItem.finished);
    returnList.push(...unfinishedTodos, ...finishedTodos);
    // console.log('finished', finishedTodos)
    return returnList;
  }

  deleteToDoItem(toDoItemId: string) {
	  const indexToDelete = this.todoList.findIndex((todoItem: ToDoItem) => todoItem._id === toDoItemId);

	  if (indexToDelete === -1) {
		  return;
	  }

	  this.todoList.splice(indexToDelete, 1);
  }

  toggleFinishToDo(toDoItemId: string) {
    const indexToFinish = this.todoList.findIndex((todoItem: ToDoItem) => todoItem._id === toDoItemId);

	  if (indexToFinish === -1) {
		  return;
	  }

    const finishedItem = this.todoList.splice(indexToFinish, 1)[0];

    if (!!finishedItem.finished) {
      this.todoList.push(finishedItem);
    } else {
      this.todoList.unshift(finishedItem);
    }
    
  }
}
