import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: '2a3bdac6',
      firstName: 'user',
      lastName: 'one',
      age: 12,
      login: 'jake123',
      password: '1234fdsf',
      isDeleted: false,
    },
    {
      id: '2a3bdac7',
      firstName: 'user',
      lastName: 'two',
      age: 12,
      login: 'jake123',
      password: '1234fdsf',
      isDeleted: true,
    },
  ];
  constructor() {}
  public getUsers(): User[] {
    return this.users;
  }
}
