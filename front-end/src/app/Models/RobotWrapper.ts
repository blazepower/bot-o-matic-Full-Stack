import {Robot} from './Robot';

export interface RobotWrapper {
  _embedded: {
    robots: Robot[];
  };
}
