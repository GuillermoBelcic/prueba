import { Component, OnInit } from '@angular/core';
import { ToDoItem } from 'src/app/models/TodoItem.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor(private $apiService: ApiService) { }

  ngOnInit(): void {
  }

  onsubmit(myForm) {
    console.log(myForm.value)
    const myNewToDo = new ToDoItem(null, myForm.value.tarea, myForm.value.description, null, null);
    this.$apiService.createToDo(myNewToDo)
    .subscribe(response => console.log(response));

  }

}
