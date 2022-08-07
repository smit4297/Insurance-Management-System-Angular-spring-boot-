import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HomePolicy } from 'src/app/classes/home-policy';
import { HealthPolicy } from 'src/app/classes/health-policy';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';
import { Hospital } from 'src/app/classes/hospital';
import { Illness } from 'src/app/classes/illness';

@Component({
  selector: 'app-user-policies',
  templateUrl: './user-policies.component.html',
  styleUrls: ['./user-policies.component.css', './../../../../src/assets/home_css/homecss1.css']
})
export class UserPoliciesComponent implements OnInit {

  constructor(private route: Router, private service: InsuranceManagementService) { }

  homePolicy: HomePolicy = new HomePolicy(0, "", "", "", 0, 0, 0, 0,0,0)
  healthPolicy: HealthPolicy = new HealthPolicy(0, 0, "", "", "", 0, 0, 0)

  // healthpolicies: HealthPolicy[] = [];
  // homepolicies: HomePolicy[] = [];
  hospitalList: Hospital[] = [];
  illnessList: Illness[] = [];

  userid : number
  username : string
  ngOnInit(): void {
    this.userid = +sessionStorage.getItem('userId')
    this.username = sessionStorage.getItem('username')
    this.getHomePolicyDetails()
    this.getHealthPolicyDetails()
    console.log(this.hospitalList)
  }

  getHealthPolicyDetails() {

    this.service.getHealthInsuranceByusrId(this.userid).subscribe((data: any) => {
      // console.log(data);
      this.healthPolicy = data
      if (this.healthPolicy.policyid != 0) {
       
        console.log(this.healthPolicy)
        this.service.getHospitalByPolId(this.healthPolicy.policyid).subscribe((data: any) => {
          // console.log(data);
          this.hospitalList = data;
          // console.log(this.hospitalList)
        })

        this.service.getIllnessByPolId(this.healthPolicy.policyid).subscribe((data: any) => {
          // console.log(data);
          this.illnessList = data;
          // console.log(this.illnessList)
        })

      }
    })
  }

  getHomePolicyDetails() {
    // this.homePolicy = this.service.getHomeInsuranceByusrId(this.userid)
    // console.log(this.homePolicy)
    this.service.getHomeInsuranceByusrId(this.userid).subscribe((data: any) => {
      // console.log(data);
      this.homePolicy = data
      if (this.homePolicy.policyid != 0) {
        console.log(this.homePolicy)       
      }
    })
  }


  OwnedPolicies() {
    this.route.navigateByUrl("/users-policies")
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


}
