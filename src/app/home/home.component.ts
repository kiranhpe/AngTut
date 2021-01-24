import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService : UserService) { }

  users:User[] = [];
  ngOnInit(): void {
    this.userService.GetUsers().subscribe((data:User[]) => {
      this.users=data;
    });
  }
}
