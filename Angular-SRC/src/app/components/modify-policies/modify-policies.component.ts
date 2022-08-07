import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';
import { UserPolicy } from 'src/app/classes/user-policy';
import { User } from 'src/app/classes/user';
import { HealthPolicy } from 'src/app/classes/health-policy';
import { HomePolicy } from 'src/app/classes/home-policy';


@Component({
  selector: 'app-modify-policies',
  templateUrl: './modify-policies.component.html',
  styleUrls: ['./modify-policies.component.css','./../../../../src/assets/home_css/homecss1.css']
})

export class ModifyPoliciesComponent implements OnInit {

  homePolicyList:UserPolicy[] = [];
  healthPolicyList:UserPolicy[] = [];
  userDetails : User
  healthPolicy : HealthPolicy
  homePolicy : HomePolicy

  constructor(private route : Router, private service : InsuranceManagementService) { }

  ngOnInit(): void {
    this.listHealthPolicies()
    this.listHomePolicies()
  }

  stopPolicy(policy:UserPolicy){
    this.service.deleteUserPolicy(policy.userid,policy.policyid).subscribe((data:any)=>{
      // console.log(data);
      alert("Policy of user: "+ policy.userid + " Is Removed.")
      this.listHealthPolicies()
      this.route.navigateByUrl("/modify-policies")
    })
  }

  stopHomePolicy(policy:UserPolicy){
    this.service.deleteUserPolicyOfHome(policy.policyid).subscribe((data:any)=>{
      // console.log(data);
      alert("Policy of user: "+ policy.userid + " Is Removed.")
      this.listHomePolicies()
      this.route.navigateByUrl("/modify-policies")
      // window.location.reload();
    })
  }

  listHealthPolicies(){
    this.service.getAllUsersWithHealthPolicy().subscribe((data:any)=>{
      // console.log(data);
      this.healthPolicyList = data;
    })
  }

  listHomePolicies(){
    this.service.getAllUsersWithHomePolicy().subscribe((data:any)=>{
      // console.log(data);
      this.homePolicyList = data;
    })
  }

  getUserDetails(userid : number){
    this.service.getUserById(userid).subscribe((data:any)=>{
      // console.log(data);
      this.userDetails = data;
    })
  }

  getHomePolicyDetails(policyid:number){
    this.service.getHomePolicyById(policyid).subscribe((data:any)=>{
      // console.log(data);
      this.homePolicy = data;
    })
  }

  getHealthPolicyDetails(policyid:number){
    this.service.getHealthPolicyById(policyid).subscribe((data:any)=>{
      // console.log(data);
      this.healthPolicy = data;
    })
  }

  modifyHomePolicy(policy:UserPolicy){
    this.route.navigateByUrl("/edit-home-policy/"+policy.policyid)
  }

  logout() {
    sessionStorage.setItem('log','0');
    this.route.navigateByUrl("")
  }

}
