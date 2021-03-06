import { Component } from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = 'Nombre Prueba';
  myUsers: {name: string; email: string; password: string}[] = [];

  constructor(private $apiService: ApiService) {
    // this.$apiService.getUsers()
    //   .subscribe((users: any[]) => {
    //     this.myUsers = users;
    //   });
  }
}
