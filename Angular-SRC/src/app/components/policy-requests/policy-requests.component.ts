import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Healthpolicyrequest } from 'src/app/classes/healthpolicyrequest';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';
import { UserPolicy } from 'src/app/classes/user-policy';
import { Homepolicyrequest } from 'src/app/classes/homepolicyrequest';
import { Policy } from 'src/app/classes/policy';
import { HomePolicy } from 'src/app/classes/home-policy';

@Component({
  selector: 'app-policy-requests',
  templateUrl: './policy-requests.component.html',
  styleUrls: ['./policy-requests.component.css','./../../../../src/assets/home_css/homecss1.css']
})
export class PolicyRequestsComponent implements OnInit {

  healthPolicyReqList:Healthpolicyrequest[] = [];
  homePolicyReqList:Homepolicyrequest[] = [];

  requestToBedeleated : Healthpolicyrequest
  homereqToBedeleated : Homepolicyrequest
  policy : Policy = new Policy(0,2)
  homePolicy : HomePolicy = new HomePolicy(5004,"","","",0,0,0,0,0,0)
  approvedPolicy : UserPolicy = new UserPolicy(0,0,new Date())

  constructor(private route : Router, private service : InsuranceManagementService) { }

  
  ngOnInit(): void {
      this.listHealthPolicyRequests()
      this.listHomePolicyRequests() 
  }

  listHomePolicyRequests(){
    this.service.getAllHomePolicyRequests().subscribe((data:any)=>{
      console.log(data);
      this.homePolicyReqList = data;
    })
  }

  listHealthPolicyRequests(){
    this.service.getAllHealthPolicyRequests().subscribe((data:any)=>{
      console.log(data);
      this.healthPolicyReqList = data;
    })
  }

  approveHealthRequest(request : Healthpolicyrequest){
    this.approvedPolicy.policyid = request.policyid
    this.approvedPolicy.policystartdate = request.startdate
    this.approvedPolicy.userid = request.userid
    this.service.aprovePolicy(this.approvedPolicy).subscribe((data:any)=>{
      console.log(data);
      alert("Request From Userid: "+ this.approvedPolicy.userid + " Has Been Approved.")
      this.service.deleteHealthpolicyRequest(this.approvedPolicy.userid).subscribe((data:any)=>{})
      // this.listHealthPolicyRequests()
      window.location.reload();
    }) 
  }

  approveHomeRequest(request : Homepolicyrequest){
    this.service.savePolicy(this.policy).subscribe((data:any)=>{
    this.homePolicy.policyid = data.policyid
    this.approvedPolicy.policyid = data.policyid
    this.homePolicy.policyname = "SSR SPECIAL HOME INSURANCE"
    this.homePolicy.areaid = request.areaid
    this.homePolicy.sumassurence = request.sumassurence
    this.homePolicy.premium = request.premium
    this.homePolicy.policyterm = request.policyterm
    this.homePolicy.homevalue = request.homevalue
    this.homePolicy.deductables = request.deductables
    this.approvedPolicy.userid = request.userid
    console.log(this.approvedPolicy)
    this.service.aprovePolicy(this.approvedPolicy).subscribe((data:any)=>{
      this.service.saveHomePolicy(this.homePolicy).subscribe((data:any)=>{
        this.service.deleteHomepolicyRequest(this.approvedPolicy.userid).subscribe((data:any)=>{
          alert("Request From Userid: "+ this.approvedPolicy.userid + " Has Been Approved.")
        // this.listHealthPolicyRequests()
        window.location.reload();
        })
      })
    })
    })
  }

  declineHealthRequest(request : Healthpolicyrequest){
      this.requestToBedeleated = request
      this.service.deleteHealthpolicyRequest(this.requestToBedeleated.userid).subscribe((data:any)=>{
        console.log(data);
        alert("Request From Userid: "+ this.requestToBedeleated.userid + " Has Been Removed.")
        this.listHealthPolicyRequests()
      })
  }

  declineHomeRequest(request : Homepolicyrequest){
    this.homereqToBedeleated = request
    this.service.deleteHomepolicyRequest(this.homereqToBedeleated.userid).subscribe((data:any)=>{
      console.log(data);
      alert("Request From Userid: "+ this.homereqToBedeleated.userid + " Has Been Removed.")
      this.listHomePolicyRequests()
    })
}

  logout() {
    sessionStorage.setItem('log','0');
    this.route.navigateByUrl("")
  }
}
