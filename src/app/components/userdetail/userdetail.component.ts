import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
})
export class UserdetailComponent implements OnInit {
  constructor(private router: Router, private usersService: UsersService) {}
  @Input() id :string|any;
  url: string = this.router.url;
  // public id = this.url.split('/')[2];
  userData: User | any={}//this.usersService.getUsers().find(item=>item.id===this.id);
  ngOnInit(): void {
    console.log(this.id," detail id")
  //   this.url = this.router.url;
  //   let id = this.url.split('/')[2];
  //   this.userData=this.usersService.getUsers().find(item=>item.id===id);
  //   // this.userData = window.history.state.data;
  //   console.log(this.userData);
  }
  
  // url = this.router.url;
    // this.userData=this.usersService.getUsers().find(item=>item.id===id);
  // ngOnChanges(changes:SimpleChanges){
  //   console.log(changes," changes")
  // }
}
