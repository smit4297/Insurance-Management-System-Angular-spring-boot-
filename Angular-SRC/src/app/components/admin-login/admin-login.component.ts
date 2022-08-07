import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/classes/admin';
import { Router } from '@angular/router';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css',
  './../../../../src/assets/bootstrap4.css']
})
export class AdminLoginComponent implements OnInit {

  email :string = null
  password : string
  clickcount : number = 0
  adminModel : Admin = new Admin("","")
  constructor(private route : Router, private service : InsuranceManagementService) { }

  ngOnInit(): void {
  }

  adminLogin(){
    this.clickcount = 1
    this.service.getAdminByEmail(this.email).subscribe((data:any) => {
      this.adminModel = data;
      if(this.adminModel.password == this.password) {
        sessionStorage.setItem('log','1');
        console.log("admin logged in")
        
        this.route.navigateByUrl("/admin-dashboard");
      }
    })
  }



}
