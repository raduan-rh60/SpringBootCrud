import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../service/app.service';
import { User } from '../model/user.model';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  id!:string;
  details!:User;

  constructor(private router:Router,private userService:UserService){}

  passData(){
    
    this.userService.getDataByID(this.id).subscribe((res)=>{
      this.details=res;
      this.router.navigate(['details'],{
        state:{
          response:this.details
        }
      });
    })
  }

}