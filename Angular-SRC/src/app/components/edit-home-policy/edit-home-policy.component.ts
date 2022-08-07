import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';
import { HomePolicy } from 'src/app/classes/home-policy';

@Component({
  selector: 'app-edit-home-policy',
  templateUrl: './edit-home-policy.component.html',
  styleUrls: ['./edit-home-policy.component.css','./../../../../src/assets/home_css/homecss1.css']
})
export class EditHomePolicyComponent implements OnInit {

  homePolicy: HomePolicy = new HomePolicy(0,"","","",0,0,0,0,0,0)
  constructor(private route : Router, private service : InsuranceManagementService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() =>{this.getHomePolicyById()})
  }

  onSubmit(homePolicy : HomePolicy) { 
    this.service.updateHomePolicy(this.homePolicy).subscribe(()=>{
      alert("Policy has been modified successfully.")
      this.route.navigateByUrl("/modify-policies")
    })
  }

  getHomePolicyById(){
    const policyid = +this.activatedRoute.snapshot.paramMap.get("policyid")
    // if(productId > 0){
    //   this.isEditable = true
        this.service.getHomePolicyById(policyid).subscribe(((data:any)=>{
          this.homePolicy = data
        }))
    // }
  }

  logout() {
    sessionStorage.setItem('log','0');
    this.route.navigateByUrl("")
  }
}
