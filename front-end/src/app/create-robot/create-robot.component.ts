import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RobotDataService} from '../Services/robot-data.service';
import {Robot} from '../Models/Robot';
import {Task} from '../Models/Task';
import {ErrorStateMatcher} from '@angular/material/core';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-create-robot',
  templateUrl: './create-robot.component.html',
  styleUrls: ['./create-robot.component.css']
})
export class CreateRobotComponent implements OnInit {

  createRobotForm: FormGroup = this.formBuilder.group({
    robotName: ['', Validators.required],
    robotType: ['', Validators.required],
    jobs: ['']
  });

  robot: Robot;
  robotTypes: string[];
  taskList: Task[];
  editRobot: Robot;
  editingRobot = false;

  matcher = new TooManyTasks();

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly robotDataService: RobotDataService
  ) {
  }

  ngOnInit(): void {
    this.robotDataService.getRobotTypes().subscribe((response) => {
      this.robotTypes = response;
    });
    this.robotDataService.getTasks().subscribe(response => this.taskList = response);

    if (localStorage.getItem('current-robot')) {
      this.editRobot = JSON.parse(localStorage.getItem('current-robot'));
      this.editingRobot = true;
      this.createRobotForm.get('robotName').setValue(this.editRobot.name);
      this.createRobotForm.get('robotName').disable();
      this.createRobotForm.get('robotType').setValue(this.editRobot.robotTypes);
      this.createRobotForm.get('robotType').disable();
      localStorage.removeItem('current-robot');
    }
  }

  onSubmit(): void {
    if (this.editingRobot && this.createRobotForm.valid && this.createRobotForm.get('jobs').value.length <= 5) {
      this.robotDataService.addTaskToRobot(this.editRobot.id, this.createRobotForm.get('jobs').value).subscribe(
        () => this.router.navigateByUrl('/dashboard')
      );
      return;
    }
    if (this.createRobotForm.valid && this.createRobotForm.get('jobs').value.length <= 5) {
      this.robotDataService.createRobot(this.createRobotForm.get('robotName').value, this.createRobotForm.get('robotType').value)
        .pipe(
          switchMap(
            response => this.robotDataService.addTaskToRobot(response.id, this.createRobotForm.get('jobs').value)
          )
        )
        .subscribe(() => {
          this.router.navigateByUrl('/dashboard');
        });
    }
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

export class TooManyTasks implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return control.value.length > 5;
  }
}
