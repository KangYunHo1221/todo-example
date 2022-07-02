import axios from 'axios';
import { useMyQuery } from 'myQuery/useMyQuery';

const CountIndicator = ({ completedCount }: { completedCount: number }) => {
  const { response, isLoading, error } = useMyQuery('todos', () =>
    axios.get('http://localhost:4000/todos').then((res) => res.data),
  );

  return <div>Total completed todo : {completedCount}</div>;
};

export default CountIndicator;
