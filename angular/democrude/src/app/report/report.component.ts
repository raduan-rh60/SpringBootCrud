import { Component } from '@angular/core';
import { UserService } from '../service/app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

  constructor(private userService: UserService ){}
  path:any;
  getUserReportHTML(){
    this.userService.getReport("html").subscribe(res=>{
      this.path = res;
      window.open('reports/'+this.path.key1);
    })
  }
  getUserReportPDF(){
    this.userService.getReport("pdf").subscribe(res=>{
      this.path = res;
      window.open('reports/'+this.path.key1);
    })
  }
}
