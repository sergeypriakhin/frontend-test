import React from 'react';
import Form from './Form';
import Table from './Table';
import useFetch from './Fetch';
import './App.css';

const url = 'https://next.json-generator.com/api/json/get/E1A1DDiPw';

function App() {
  const [ loading, data, error ] = useFetch({ url });
  const { columns = [], rows = [], cell = [] } = data;

  if(loading) return 'Loading ...';
  if(error) return `Error: ${error.status} ${error.statusText}`;

  return (
    <div className="app">
      <Form />
      <h3>Table</h3>
      <Table
        columns={columns}
        rows={rows}
        cell={cell}
      />
    </div>
  );
}

export default App;
