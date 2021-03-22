import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from '../service/guards/auths.service';


const userData = [
  {username:"krishna",email:"krishna@gmail.com",userId:"1234"},
  {username:"manikumar",email:"main@gmail.com",userId:"5678"},
  {username:"user",email:"user@gmail.com",userId:"6765"},
  {username:"test",email:"test@gmail.com",userId:"9034"},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService){

  }
  ngOnInit(){

  }
  displayedColumns: string[] = ['username', 'email', 'userId'];
  dataSource = new MatTableDataSource(userData);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  userLogin(){
    this.auth.login()
  }
  userLogout(){
    this.auth.logout()
  }
}
