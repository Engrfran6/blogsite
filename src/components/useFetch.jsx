import {useEffect, useState} from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [err404, setErr404] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          throw Error('Posts can not be found');
        } else {
          setLoading(false);
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setErr404(err.message);
      });
  }, [url]);

  return {data, err404, loading};
}
