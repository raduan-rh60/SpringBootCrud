import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../service/app.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit{



  UserInfo!:User;
  id=input.required<string>();

  constructor(private activateroute:ActivatedRoute,private userservice:UserService){}

  ngOnInit(): void {
  //  this.activateroute.paramMap.subscribe(res =>{
  //   this.id = res.get('id')!;
  //  
  //  })
  this.getData()
  }

getData(){
  this.userservice.getDataByID(this.id()).subscribe(res=>{
    this.UserInfo = res;
  })
}


}
