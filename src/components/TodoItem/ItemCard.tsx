import { FC } from 'react';
import {
  ActionBtnsContainer,
  CardContainer,
  Description,
  ItemContent,
  StatusChip,
  Title,
} from './style';
import { Task } from 'types/tasks';
import dayjs from 'dayjs';
import { IconButton, Tooltip } from '@mui/material';
import { Status } from 'types/enums/status';

import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch } from 'react-redux';
import { removeTask, toggleCompleteTask } from 'stor/tasks/tasksSlice';

interface ItemCardProps {
  task: Task;
  handleEditClick: () => void;
}

const ItemCard: FC<ItemCardProps> = ({ task, handleEditClick }) => {
  const dispatch = useDispatch();

  return (
    <>
      <CardContainer>
        <Title variant='h3'>{task.title}</Title>
        <StatusChip label={task.status} status={task.status} />
      </CardContainer>
      <ItemContent>
        <div>
          {task.description && <Description variant='body1'>{task.description}</Description>}
          <Description variant='body1'>
            Deadline:{' '}
            <span>
              {task.deadline ? dayjs(task.deadline).format('MMMM DD, YYYY') : 'Not determined'}
            </span>
          </Description>
        </div>
        {task.status !== Status.REMOVED && (
          <ActionBtnsContainer>
            <Tooltip title='Edit Task'>
              <IconButton onClick={handleEditClick} disabled={task.status === Status.OVERDUE}>
                <ModeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Delete Task'>
              <IconButton
                onClick={() => {
                  dispatch(removeTask(task.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            {task.status !== Status.COMPLETED ? (
              <Tooltip title='Mark as Complete'>
                <IconButton
                  disabled={task.status === Status.OVERDUE}
                  onClick={() => dispatch(toggleCompleteTask(task.id))}
                >
                  <RadioButtonUncheckedIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title='Mark as InComplete'>
                <IconButton onClick={() => dispatch(toggleCompleteTask(task.id))}>
                  <CheckCircleIcon />
                </IconButton>
              </Tooltip>
            )}
          </ActionBtnsContainer>
        )}
      </ItemContent>
    </>
  );
};
export default ItemCard;
