import { Routes } from '@angular/router';
import { UserComponent } from './user/components/user';
import { HomeComponent } from './home/component/home';
import { CategoryComponent } from './category/components/category';

export const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  {path: 'categories',component:CategoryComponent}
];
