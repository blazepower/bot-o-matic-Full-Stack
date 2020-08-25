import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {RobotWrapper} from '../Models/RobotWrapper';
import {catchError} from 'rxjs/operators';
import {RobotTypes} from '../RobotTypes';
import {Robot} from '../Models/Robot';
import {Task} from '../Models/Task';

@Injectable({
  providedIn: 'root'
})
export class RobotDataService {

  baseUrl = environment['rishik.robot.api'];

  constructor(private readonly httpClient: HttpClient) {
  }

  getRobots(): Observable<RobotWrapper> {
    return this.httpClient
      .get<RobotWrapper>(`${this.baseUrl}/robot/robots`)
      .pipe(
        catchError(err => throwError(err.err || err))
      );
  }

  getRobotTypes(): Observable<string[]> {
    return this.httpClient
      .get<string[]>(`${this.baseUrl}/robot/getRobotTypes`)
      .pipe(
        catchError(err => throwError(err.err || err))
      );
  }

  createRobot(name: string, robotTypes: RobotTypes): Observable<Robot> {
    return this.httpClient
      .post<Robot>(`${this.baseUrl}/robot/createRobot?name=${name}&robotTypes=${robotTypes}`, {})
      .pipe(
        catchError(err => throwError(err.err || err))
      );
  }

  addTaskToRobot(id: number, task: Task[]): Observable<Robot> {
    return this.httpClient
      .post<Robot>(`${this.baseUrl}/robot/createRobot/${id}/addTasks`, task)
      .pipe(
        catchError(err => throwError(err.err || err))
      );
  }

  getTasks(): Observable<Task[]> {
    return this.httpClient
      .get<Task[]>(`${this.baseUrl}/task/getTasks`)
      .pipe(
        catchError(err => throwError(err.err || err))
      );
  }

  completeTasks(id: number): Observable<Robot> {
    return this.httpClient
      .post<Robot>(`${this.baseUrl}/robot/${id}/completeTasks`, {})
      .pipe(
        catchError(err => throwError(err.err || err))
      );
  }

  addTask(description: string, eta: number): Observable<Task> {
    return this.httpClient
      .post<Task>(`${this.baseUrl}/task/addTask?description=${description}&eta=${eta}`, {})
      .pipe(
        catchError(err => throwError(err.err || err))
      );
  }
}
