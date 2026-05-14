import { Routes } from '@angular/router';
import { UserComponent } from './user/components/user';
import { HomeComponent } from './home/component/home';
import { CategoryComponent } from './category/components/category';
import { TaskComponent } from './task/components/task';
import { DetailsComponent } from './details/components/details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'details/:id', component: DetailsComponent }

];
