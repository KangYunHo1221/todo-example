import { useEffect, useState } from 'react';

export const useMyQuery = (key: string, callback: Function) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetch = async () => {
    try {
      const tempRes = await callback();

      setResponse(tempRes);
    } catch {
      setError('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch();
  }, []);

  return { response, error, isLoading };
};
