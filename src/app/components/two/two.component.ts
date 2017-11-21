import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  user:string;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.getFirstUser();
  }
}
