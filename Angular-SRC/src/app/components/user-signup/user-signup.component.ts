import { Component, OnInit ,NgModule } from '@angular/core';
import { InsuranceManagementService } from 'src/app/services/insurance-management.service';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css','./../../../../src/assets/bootstrap4.css']
})
export class UserSignupComponent implements OnInit {

  constructor(private service : InsuranceManagementService, private route : Router) { }

  userModel : User = new User (0,"","","",0,"",0,new Date())

  ngOnInit(): void {

  }

  onSubmit(userModel : User) { 

      this.userModel = userModel;
      if(this.userModel.emailid != ""){
      this.service.saveUser(this.userModel).subscribe((data:any)=>{
        this.userModel = data
        console.log(this.userModel.userid)
        sessionStorage.setItem('log','1');
        sessionStorage.setItem('userId',String(this.userModel.userid))
        sessionStorage.setItem('username',this.userModel.name);
        this.route.navigateByUrl("")
    })
  }
  }

}
