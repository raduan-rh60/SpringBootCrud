import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/app.service';
import { User } from '../model/user.model';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-data',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css',
})

export class ShowDataComponent implements OnInit {
  formValue!:FormGroup;
  showData: User[] = [];
  userModel!: User;

  constructor(private userService: UserService, private formBuilder:FormBuilder) {}
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name:[''],
      role:['']
    })

    this.getAllData();
  }

  getAllData() {
    this.userService.getallUser().subscribe((res : User[]) => {
      this.showData = res;
    });
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.getAllData();
    });
  }

  showEditData(data:User){
    this.userModel=data;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['role'].setValue(data.role);

  }

  userUpdateData(){
    this.userService.putUser(this.userModel.id,this.formValue.value).subscribe(() => {
      alert("update Success!");
      this.getAllData();
    });
  }

}
