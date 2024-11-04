import { Routes } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '',component: ShowDataComponent,},
  {path:'form',component:UserFormComponent},
  {path:'home',component:HomeComponent},
];
