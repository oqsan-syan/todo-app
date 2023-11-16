import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

import { RootState } from 'stor/store';
import { Task } from 'types/tasks';

import TodoItem from 'components/TodoItem';
import EmptyBox from 'components/EmptyBox';

const Trash: FC = () => {
  const deletedTasks = useSelector((state: RootState) => state.tasks.deletedTasks);

  return (
    <>
      {deletedTasks.length === 0 ? (
        <EmptyBox content={'Trash is Empty'} />
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
          {deletedTasks.map((task: Task) => (
            <Grid item xs={12} key={task.id}>
              <TodoItem key={task.id} task={task} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Trash;
