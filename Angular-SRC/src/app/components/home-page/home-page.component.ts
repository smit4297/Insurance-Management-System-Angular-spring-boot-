import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css','./../../../../src/assets/home_css/homecss1.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route : Router) { }
  isLoggedIn :boolean 
  ngOnInit(): void {
    this.isUserLoggedIn()
  }

  isUserLoggedIn(){
    if (sessionStorage.getItem('log') =='1') {
      this.isLoggedIn= true;
    }
    else {
      this.isLoggedIn= false;
    }
  }

  logout() {
    sessionStorage.setItem('log','0');
    window.location.reload();
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
    this.route.navigateByUrl("/home-insurance")
  }

  AdminLogin(){
    this.route.navigateByUrl("/admin-login")
  }

  UserLogin(){
    this.route.navigateByUrl("/user-login")
  }


}
