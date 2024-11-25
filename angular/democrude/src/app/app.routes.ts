import { Routes } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';

export const routes: Routes = [
  {path: '',component: LoginComponent},
  {path:'form',component:UserFormComponent},
  {path:'home',component:HomeComponent},
  {path:'profile/:id',component:UserInfoComponent},
  {path:'details',component:DetailsComponent},
  {path:'user',component:ShowDataComponent},
  {path:'report',component:ReportComponent}
];
