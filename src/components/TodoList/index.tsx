import { useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import { Status } from 'types/enums/status';
import { Task } from 'types/tasks';

import { RootState } from 'stor/store';
import { isDateExpired } from 'utils/dateUtils';

import TodoItem from 'components/TodoItem';
import EmptyBox from 'components/EmptyBox';

const TodoList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  console.log(tasks);

  return (
    <>
      {tasks.length === 0 ? (
        <EmptyBox content={'Add TODO to start'} />
      ) : (
        <Grid
          container
          spacing={4}
          sx={{
            marginTop: '24px',
            boxSizing: 'border-box',
            direction: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {tasks.map((task: Task) => {
            const isExpired = isDateExpired(task.deadline);
            const updatedStatus =
              isExpired && task.status !== Status.COMPLETED ? Status.OVERDUE : task.status;

            return (
              <Grid item xs={12} key={task.id}>
                <TodoItem key={task.id} task={{ ...task, status: updatedStatus }} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default TodoList;
