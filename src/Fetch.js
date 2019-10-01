import axios from 'axios';
import { useState, useEffect } from 'react';

const { CancelToken } = axios;

const err = { error: false, message: '' }

const useFetch = ({ url, method = 'get' }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(err);

  useEffect(() => {

    if (!url) return;

    const source = CancelToken.source();

    setLoading(true);

    axios({
      method: method,
      url: url,
    }).then(({ data }) => {
      setData(data);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      setError({
        error: true,
        message: `${error.response.status} ${ error.response.statusText}`
      })
    });

    return () => {
      source.cancel();
    };
  }, [url, method]);

  return [
    loading,
    data,
    error
  ];
};

export default useFetch;