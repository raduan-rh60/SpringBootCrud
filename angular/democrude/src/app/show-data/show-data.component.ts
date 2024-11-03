import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/app.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-show-data',
  standalone: true,
  imports: [],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css',
})
export class ShowDataComponent implements OnInit {
  showData: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.userService.getallUser().subscribe((res) => {
      this.showData = res;
    });
  }
}
