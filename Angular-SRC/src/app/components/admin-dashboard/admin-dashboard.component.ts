import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css','./../../../../src/assets/home_css/homecss1.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.setItem('log','0');
    this.route.navigateByUrl("")
  }

  modifyPolicies(){
    this.route.navigateByUrl("/modify-policies")
  }

  policyRequests(){
    this.route.navigateByUrl("/policy-requests")
  }

}
