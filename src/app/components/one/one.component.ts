import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  user:string;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.getFirstUser();
  }

}
