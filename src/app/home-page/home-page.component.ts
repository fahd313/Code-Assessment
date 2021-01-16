import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import {User} from './user';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  getUser(username): void {
    this.userService.getUsersByUsername(username).subscribe(
      data => {
        this.users = data;
      }
    );
  }


}


