import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../service/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterOutlet,CommonModule,RouterLink],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit{
  formValue!:FormGroup;
  constructor(private userService:UserService, private formBuilder:FormBuilder, private route:Router){}
  ngOnInit(): void {
   this.formValue = this.formBuilder.group(
    {
      name:[''],
      role:[''],
      salary:[]
    }
   );
  }

  addUser(){
    this.userService.PostUser(this.formValue.value).subscribe((res)=>{
      alert("User Add Successful");
      this.route.navigate(['']);
    })
  }

  

}
