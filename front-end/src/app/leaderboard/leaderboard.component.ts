import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RobotDataService} from '../Services/robot-data.service';
import {Robot} from '../Models/Robot';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  robots: Robot[];

  constructor(
    private readonly router: Router,
    private readonly robotDataService: RobotDataService
  ) { }

  ngOnInit(): void {
    this.robotDataService.getRobots().subscribe((response) => {
      this.robots = response._embedded.robots;
      this.robots.sort((a, b) => (a.totalTasksCompleted < b.totalTasksCompleted) ? 1 : -1);
    });
  }

  addRobot(): void {
    this.router.navigateByUrl('/create-robot');
  }

  addTask(): void {
    this.router.navigateByUrl('/add-task');
  }

  dashboard(): void {
    this.router.navigateByUrl('/dashboard');
  }

}
