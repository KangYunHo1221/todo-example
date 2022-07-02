import { TodoType } from 'App';

interface TodoProps {
  todo: TodoType;
  handleCheckTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const Todo = ({ todo, handleCheckTodo, handleDeleteTodo }: TodoProps) => {
  const { id, title, completed } = todo;

  return (
    <div>
      <input type='checkbox' checked={completed} onChange={() => handleCheckTodo(id)} />
      <span>{title}</span>
      <button onClick={() => handleDeleteTodo(id)}>X</button>
    </div>
  );
};

export default Todo;
