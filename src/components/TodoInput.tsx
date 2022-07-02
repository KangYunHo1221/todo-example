import { useRef } from 'react';

interface TodoInputProps {
  handleAddTodo: (title: string) => void;
}

const TodoInput = ({ handleAddTodo }: TodoInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={() => handleAddTodo(inputRef.current?.value || '')}>
      <input defaultValue='' placeholder='enter your todo' ref={inputRef} />
    </form>
  );
};

export default TodoInput;
