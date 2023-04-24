import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent  {
  usersData: User[] = [];
  urlRoute: string = '';
  manageUser: any;
  @Input() isDeleted: boolean | any;
  @Input() activateButton: boolean | any;
  @Input() deactivateButton: boolean | any;
  @Input() manageButton: boolean | any;
 @Input() users:User[]|any;
  constructor(private usersService: UsersService, private router: Router) {}
//   ngOnInit(): void {
//     this.usersService.getUsers().subscribe((data) => {
//       this.usersData = data;
//     });
//     console.log(this.manageButton, ' managebtn is deleted');
//   }
}
