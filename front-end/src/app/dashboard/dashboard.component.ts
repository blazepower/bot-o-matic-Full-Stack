import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RobotDataService} from '../Services/robot-data.service';
import {Robot} from '../Models/Robot';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  robots: Robot[];

  constructor(
    private readonly router: Router,
    private readonly robotDataService: RobotDataService,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.robotDataService.getRobots().subscribe((response) => {
      this.robots = response._embedded.robots;
    });
  }

  onRobotselect(robot: Robot): void {
    if (robot && robot.tasks.length === 0) {
      this.router.navigate(['create-robot', robot.name]);
      localStorage.setItem('current-robot', JSON.stringify(robot));
    }
  }

  onStartSelect(robot: Robot): void {
    this.robotDataService.completeTasks(robot.id).subscribe((response) => {
      const robotIndex = this.robots.findIndex(r => robot.id === r.id);
      this.robots[robotIndex] = response;
      this.openSnackBar(`${robot.name} has completed`, 'Close');
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

  openSnackBar(message: string, action: string): void {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }
}
