import { useEffect, useState } from 'react';
import { useCallback } from 'react';

type Data = {
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);

  const dataCallback = useCallback(() => {
    function getData() {
      // fetch data
      return { foo: 'bar' };
    }
    return getData();
  }, []);

  useEffect(() => {
    const data = dataCallback();
    setData(data);
    setCounter((prev) => prev + 1);
  }, [dataCallback]);

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
