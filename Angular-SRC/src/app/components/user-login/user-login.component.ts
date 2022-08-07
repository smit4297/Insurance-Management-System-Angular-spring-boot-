import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css',
  './../../../../src/assets/bootstrap4.css']
})
export class UserLoginComponent implements OnInit {

  email :string = null
  password : string
  userModel : User = new User (0,"","","",0,"",0,new Date())
  clickcount : number = 0
  constructor(private route : Router, private service : InsuranceManagementService) { }

  ngOnInit(): void {
  }

  userLogin(){
    this.clickcount = 1
    this.service.getUserByEmail(this.email).subscribe((data:any) => {
      this.userModel = data;
      if(this.userModel.password == this.password) {
        sessionStorage.setItem('log','1');
        console.log("user logged in")
        sessionStorage.setItem('userId',String(this.userModel.userid))
        sessionStorage.setItem('username',this.userModel.name);
        this.route.navigateByUrl("");
      }
    })
    }


    UserSignup(){
      this.route.navigateByUrl("/user-signup")
    }


  }


