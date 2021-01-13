import { Component } from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titulo Prueba';
  name = 'Nombre Prueba';
  myUsers: {name: string; email: string; password: string}[] = [];

  constructor($apiService: ApiService) {
    $apiService.getUsers()
      .subscribe((users: any[]) => {
        this.myUsers = users;
      });
  }
}
