import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';
import { Homepolicyrequest } from 'src/app/classes/homepolicyrequest';

@Component({
  selector: 'app-home-request-from',
  templateUrl: './home-request-from.component.html',
  styleUrls: ['./home-request-from.component.css','./../../../../src/assets/home_css/homecss1.css']
})

export class HomeRequestFromComponent implements OnInit {

  user : User = new User(0,"","","",0,"",0,new Date())
  homeRequest : Homepolicyrequest = new Homepolicyrequest(0,0,"","",0,0,0,0,0);

  constructor(private route : Router,private service : InsuranceManagementService) { }
  isLoggedIn :boolean 
  ngOnInit(): void {
    this.isUserLoggedIn()
  }

  isUserLoggedIn(){
    if (sessionStorage.getItem('log') =='1') {
      this.isLoggedIn= true;
      this.homeRequest.userid = +sessionStorage.getItem('userId')
      this.service.getUserById(+sessionStorage.getItem('userId')).subscribe((data: any) => {
        // console.log(data);
        this.user = data
        this.homeRequest.address = this.user.address
        this.homeRequest.username = this.user.name
      })
    }
    else {
      this.isLoggedIn= false;
    }
  }

  onSubmit(){
    console.log(this.homeRequest)
    if(this.homeRequest.sumassurence != 0 && this.homeRequest.premium != 0 && this.homeRequest.policyterm != 0 && this.homeRequest.homevalue != 0 && this.homeRequest.deductables != 0 && this.homeRequest.areaid != 0){
      
      this.service.saveHomePolicyRequest(this.homeRequest).subscribe((data:any)=>{})
      alert("Your request for home insurance is sent!")
      this.route.navigateByUrl("")
    }
  }

  OwnedPolicies() {
    this.route.navigateByUrl("/users-policies")
  }

  Home(){
    this.route.navigateByUrl("")
  }

  HealthInsurance(){
    this.route.navigateByUrl("/health-insurances")
  }

  HomeInsurance(){
    this.route.navigateByUrl("/health-insurance-details")
  }

  AdminLogin(){
    this.route.navigateByUrl("/admin-login")
  }

  UserLogin(){
    this.route.navigateByUrl("/user-login")
  }

}
