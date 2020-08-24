import {Task} from './Task';

export interface Robot {
  id: number;
  name: string;
  robotTypes: string;
  tasks: Task[];
  totalTasksCompleted: number;
}
