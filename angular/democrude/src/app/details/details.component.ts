import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { userInfo } from 'os';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  userInfo!:User;
constructor(private router:Router) {
  this.userInfo=this.router.getCurrentNavigation()?.extras.state?.['response'];
  
}
  ngOnInit(): void {
    
  }
}
