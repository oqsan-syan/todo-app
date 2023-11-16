import { FC } from 'react';

import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';

const Main: FC = () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Main;
