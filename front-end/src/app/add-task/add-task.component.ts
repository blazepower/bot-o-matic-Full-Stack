import { Component } from '@angular/core';
import {RobotDataService} from '../Services/robot-data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  addTaskForm: FormGroup = this.formBuilder.group({
    taskDescription: ['', Validators.required],
    taskEta: ['', Validators.required]
  });

  constructor(
    private readonly robotDataService: RobotDataService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) { }

  onSubmit(): void {
    this.robotDataService.addTask(this.addTaskForm.get('taskDescription').value, this.addTaskForm.get('taskEta').value)
      .subscribe(() => this.router.navigateByUrl('/dashboard'));
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
