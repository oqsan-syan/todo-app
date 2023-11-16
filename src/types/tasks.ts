import { Dayjs } from 'dayjs';
import { Status } from './enums/status';

export interface Task {
  id: number;
  title: string;
  description: string;
  deadline: Dayjs | null;
  status: Status;
}

export interface TasksState {
  tasks: Task[];
  deletedTasks: Task[];
}

export interface TodoFormValues {
  title: string;
  description: string;
  deadline: Dayjs | null;
}
