import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  users:string[] = ['john', 'jill', 'peter'];

  getFirstUser(){
    return this.users[0];
  }

}
