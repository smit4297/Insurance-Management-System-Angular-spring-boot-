import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';
import { HealthPolicy } from 'src/app/classes/health-policy';
import { HealthDetailedDescComponent } from '../health-detailed-desc/health-detailed-desc.component';

@Component({
  selector: 'app-health-insurance',
  templateUrl: './health-insurance.component.html',
  styleUrls: ['./health-insurance.component.css','./../../../../src/assets/home_css/homecss1.css']
})
export class HealthInsuranceComponent implements OnInit {

  healthPolicyList:HealthPolicy[] = [];
  constructor(private service : InsuranceManagementService, private route:Router) { }
  isLoggedIn :boolean 
  ngOnInit(): void {
    this.isUserLoggedIn()
    this.listOfHealthPolicies()
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


  goToDetailedDesc(policy : HealthPolicy){
      this.service.setHealthPolicy(policy)
      this.route.navigateByUrl("/health-insurance-details")
  }
  
listOfHealthPolicies(){
  this.service.getAllHealthPolicy().subscribe((data:any)=>{
    console.log(data);
    this.healthPolicyList = data;
  })
}

  Home(){
    this.route.navigateByUrl("")
  }

  HealthInsurance(){
    this.route.navigateByUrl("/health-insurances")
  }

  HomeInsurance(){
    this.route.navigateByUrl("/home-insurance")
  }

  AdminLogin(){
    this.route.navigateByUrl("/admin-login")
  }

  UserLogin(){
    this.route.navigateByUrl("/user-login")
  }

}
