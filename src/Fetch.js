import axios from 'axios';
import { useState, useEffect } from 'react';

const { CancelToken } = axios;

const useFetch = ({ url, method = 'get' }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

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
        status: error.response.status,
        statusText: error.response.statusText,
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