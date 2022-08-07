import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Area } from 'src/app/classes/area';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';
import { HomePolicy } from 'src/app/classes/home-policy';

@Component({
  selector: 'app-home-insurance',
  templateUrl: './home-insurance.component.html',
  styleUrls: ['./home-insurance.component.css', './../../../../src/assets/home_css/homecss1.css']
})
export class HomeInsuranceComponent implements OnInit {

  areaid: number
  homevalue: number
  deductables: number
  sumassurance: number
  premium: number
  policyterm: number

  area: Area = new Area(0, "", 0)
  homePolicyOwned : HomePolicy = new HomePolicy(0,"","","",0,0,0,0,0,0)
  constructor(private route: Router, private service: InsuranceManagementService) { }
  isLoggedIn :boolean 
  ngOnInit(): void {
    this.isUserLoggedIn()
    this.UserHealthPolicyOwned()
  }

  UserHealthPolicyOwned(){
    this.service.getHomeInsuranceByusrId(+sessionStorage.getItem('userId')).subscribe((data: any) => {
      // console.log(data);
      this.homePolicyOwned = data
    })
  }

  isUserLoggedIn(){
    if (sessionStorage.getItem('log') =='1') {
      this.isLoggedIn= true;
    }
    else {
      this.isLoggedIn= false;
    }
  }

  OwnedPolicies() {
    this.route.navigateByUrl("/users-policies")
  }

  onSubmit(areaid: number, homevalue: number, deductables: number, policyterm: number) {
    
    this.service.getAreaById(areaid).subscribe((data: any) => {
      console.log(data);
      this.area = data;
      this.sumassurance = homevalue / 5
      console.log(this.area.totalclaimsinarea)
      this.premium = (this.sumassurance * policyterm * this.area.totalclaimsinarea) / 1000
      console.log(this.sumassurance)
      console.log(this.premium)
    })

  }
  RequestForm() {

    if(this.isLoggedIn){

      if(this.homePolicyOwned.policyid == 0){
        this.route.navigateByUrl("/home-insurance-request")
      }else{
        alert("You Already Own A Home-policy");
        this.route.navigateByUrl("/users-policies")
      }
      
    }
    else{
      this.route.navigateByUrl("/user-login")
    }
    
  }

  Home() {
    this.route.navigateByUrl("")
  }

  HealthInsurance() {
    this.route.navigateByUrl("/health-insurances")
  }

  HomeInsurance() {
    this.route.navigateByUrl("/home-insurance")
  }

  AdminLogin() {
    this.route.navigateByUrl("/admin-login")
  }

  UserLogin() {
    this.route.navigateByUrl("/user-login")
  }

}
