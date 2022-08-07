import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthPolicy } from 'src/app/classes/health-policy';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';
import { Hospital } from 'src/app/classes/hospital';
import { Illness } from 'src/app/classes/illness';
import { Healthpolicyrequest } from 'src/app/classes/healthpolicyrequest';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-health-detailed-desc',
  templateUrl: './health-detailed-desc.component.html',
  styleUrls: ['./health-detailed-desc.component.css','./../../../../src/assets/home_css/homecss1.css']
})

export class HealthDetailedDescComponent implements OnInit {
  healthpolicy : HealthPolicy = new HealthPolicy(0,0, "","","",0,0,0)
  user : User = new User(0,"","","",0,"",0,new Date())
  healthPolicyOwned: HealthPolicy = new HealthPolicy(0, 0, "", "", "", 0, 0, 0)
 
  healthpolicyrequest : Healthpolicyrequest = new Healthpolicyrequest(0,"",new Date(),"",0,0,0,0,new Date())
  constructor(private route : Router,private service : InsuranceManagementService) { }

  hospitalList:Hospital[] = [];
  illnessList:Illness[] = [];
  isLoggedIn :boolean 

  ngOnInit(): void {
     this.isUserLoggedIn()
     this.getHealthPolicyDetails()
     this.getAllHospitalsIncluded()
     this.getAllIllnessIncluded()
     this.UserHealthPolicyOwned()
  }

  UserHealthPolicyOwned(){
    this.service.getHealthInsuranceByusrId(+sessionStorage.getItem('userId')).subscribe((data: any) => {
      // console.log(data);
      this.healthPolicyOwned = data
    })
  }

  isUserLoggedIn(){
    if (sessionStorage.getItem('log') =='1') {
      this.isLoggedIn= true;
      this.service.getUserById(+sessionStorage.getItem('userId')).subscribe((data: any) => {
        this.user = data
      })
    }
    else {
      this.isLoggedIn= false;
    }
  }

  requestForHealthPolicy(){

    if(this.isUserLoggedIn){

      this.healthpolicyrequest.policyid = this.healthpolicy.policyid
      this.healthpolicyrequest.userid = +sessionStorage.getItem('userId')
      this.healthpolicyrequest.startdate = new Date(Date.now())
      this.healthpolicyrequest.birthdate = this.user.birthdate
      this.healthpolicyrequest.username = this.user.name
      this.healthpolicyrequest.policyname = this.healthpolicy.policyname
      this.healthpolicyrequest.policyterm = this.healthpolicy.policyterm
      this.healthpolicyrequest.policypremium = this.healthpolicy.premium
      this.healthpolicyrequest.sumassurance = this.healthpolicy.sumassurence

      if(this.healthPolicyOwned.policyid == 0){
      this.service.saveHealthPolicyRequest(this.healthpolicyrequest).subscribe(()=>{
        alert("request sent successfully.")
        this.route.navigateByUrl("")
      })
    }else{
      alert("You already have one heathpolicy.")
      this.route.navigateByUrl("/users-policies")
    }


    }else{
      this.route.navigateByUrl("/user-login")
    }
  }

  OwnedPolicies() {
    this.route.navigateByUrl("/users-policies")
  }

  getAllHospitalsIncluded(){
    this.service.getHospitalByPolId(this.healthpolicy.policyid).subscribe((data:any)=>{
      console.log(data);
      this.hospitalList = data;
    })
  }

  getAllIllnessIncluded(){
    this.service.getIllnessByPolId(this.healthpolicy.policyid).subscribe((data:any)=>{
      console.log(data);
      this.illnessList = data;
    })
  }

  getHealthPolicyDetails(){
    this.healthpolicy = this.service.gethealthPolicy()
    console.log(this.healthpolicy)
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
