import React from 'react';
import './Table.css';

function chunk(array, size, rows) {
  let results = [];

  while (array.length && results.length < rows.length) {
    results.push(array.splice(0, size));
  }

  return results;
}

function Cell({ text = '' }) {
  return (
    <td className='table__cell'>{text}</td>
  );
}

function Row({ row = [], index = 0 }) {
  return (
    <tr key={`row-${index}`} className='table__row' data-row-index={index}>
      {row.map((cell, index) => {
        return (
          <Cell key={`cell-${index}`} text={cell.text} />
        )
      })}
    </tr>
  )
}

function Table({ columns = [], rows = [], cell = [] }) {
  const results = chunk([...cell], columns.length, rows);

  return (
    <table className='table table_full'>
      <tbody>
        {results.map((row, index) => <Row key={`row-${index}`} row={row} index={index} />)}
      </tbody>
    </table>
  );
}

export default Table;