import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {CreateRobotComponent} from './create-robot/create-robot.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-robot', component: CreateRobotComponent },
  { path: 'create-robot/:name', component: CreateRobotComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'leaderboard', component: LeaderboardComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
