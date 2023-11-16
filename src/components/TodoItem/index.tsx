import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import dayjs from 'dayjs';

import { editTask } from 'stor/tasks/tasksSlice';
import { Task, TodoFormValues } from 'types/tasks';

import TodoForm from 'components/TodoForm';
import ItemCard from './ItemCard';

import { ItemContainer } from './style';

interface TodoItemProps {
  task: Task;
}

const TodoItem: FC<TodoItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEditClick = () => {
    setEditing(true);
    setEditedTask({ ...task });
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedTask({ ...task });
  };

  const handleSaveEdit = (values: TodoFormValues) => {
    dispatch(editTask({ ...values, status: task.status, id: task.id }));
    setEditing(false);
  };

  return (
    <ItemContainer>
      {isEditing ? (
        <TodoForm
          formValues={{
            title: editedTask.title,
            description: editedTask.description,
            deadline: dayjs(editedTask.deadline),
          }}
          isEdit
          onEdit={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <ItemCard task={task} handleEditClick={handleEditClick} />
      )}
    </ItemContainer>
  );
};

export default TodoItem;
