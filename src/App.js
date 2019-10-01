import React from 'react';
import Form from './Form';
import Table from './Table';
import Spin from './Spin';
import useFetch from './Fetch';
import './App.css';

const url = 'https://next.json-generator.com/api/json/get/E1A1DDiPw?status=200&delay=1000';

function App() {
  const [ loading, data, error ] = useFetch({ url });
  const { columns = [], rows = [], cell = [] } = data;

  if(error.error) return `Error: ${error.message}`;

  return (
    <div className="app">
      <Form cls='app__form' />
      <Spin spinning={loading}>
        <Table
          columns={columns}
          rows={rows}
          cell={cell}
        />
      </Spin>
    </div>
  );
}

export default App;
