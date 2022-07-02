import { client } from 'apis';
import axios, { AxiosError } from 'axios';
import CountIndicator from 'components/CountIndicator';
import Todo from 'components/Todo';
import TodoInput from 'components/TodoInput';
import { useState } from 'react';
import { useEffect } from 'react';
import { useMyQuery } from 'myQuery/useMyQuery';

export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  //const [todos, setTodos] = useState<TodoType[]>([]);

  const handleCheckTodo = () => {};
  const handleDeleteTodo = () => {};
  const handleAddTodo = () => {};

  let todos = [];
  const { response, isLoading, error } = useMyQuery('todos', () =>
    axios.get('http://localhost:4000/todos').then((res) => res.data),
  );

  if (isLoading) return <>...Loading</>;
  if (error) return <>Error!</>;

  return (
    <>
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} handleCheckTodo={handleCheckTodo} handleDeleteTodo={handleDeleteTodo} />
      ))}
      <TodoInput handleAddTodo={handleAddTodo} />
      <CountIndicator completedCount={todos?.filter((todo) => todo.completed).length} />
    </>
  );
}

export default App;

/* const handleAddTodo = async (title: string) => {
    try {
      const lastTodo = todos.at(-1);
      const newTodo = {
        id: lastTodo ? lastTodo.id + 1 : 1,
        title,
        completed: false,
      };

      await client.post(`/todos`, newTodo);

      setTodos((todos) => [...todos, newTodo]);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e);
      }
    }
  };

  const handleCheckTodo = async (id: number) => {
    const targetTodo = todos.find((todo) => todo.id === id);
    if (!targetTodo) return;

    const newTodo = { ...targetTodo, completed: !targetTodo.completed };

    try {
      await client.put(`/todos/${id}`, newTodo);

      const newTodos = todos.map((todo) => {
        if (todo.id === id) return newTodo;
        return todo;
      });
      setTodos(newTodos);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e);
      }
    }
  };

  const handleDeleteTodo = async (id: number) => {
    const targetTodo = todos.find((todo) => todo.id === id);
    if (!targetTodo) return;

    try {
      await client.delete(`/todos/${id}`);

      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e);
      }
    }
  };

*/
