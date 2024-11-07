import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/app.service';
import { User } from '../model/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 id!:number;
 userName!:string;
//  loginInfo:User[]=[];

 constructor(private router:Router,private userService:UserService){}

 login(){
  this.userService.getallUser().subscribe(res=>{
    // this.loginInfo = res;
    const loginInfo = res.find((a:any)=>{
      return a.id == this.id && a.name == this.userName
    })
    if(loginInfo){
      this.router.navigate(['profile/'+this.id]);
    }else{
      alert("Invalid Credentials")
    }
   
  })

 }

 
}
