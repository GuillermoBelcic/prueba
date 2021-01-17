import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GetExpenseAllComponent } from './components/get-expense-all/get-expense-all.component';
import { CreateExpenseComponent } from './components/create-expense/create-expense.component';

import { faCircle, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle, faSquare as farSquare, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { CreateTodoComponent } from './components/todos/create-todo/create-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
	GetExpenseAllComponent,
	CreateExpenseComponent,
	TodoListComponent,
	CreateTodoComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {

    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faCircle,
      faSquare,
      farCircle,
      farSquare,
      faStackOverflow,
      faGithub,
	  faMedium,
	  faListAlt
    );
  }
}
