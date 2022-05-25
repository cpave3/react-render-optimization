import * as React from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Grid from '../components/grid';
import NameFormatter from '../components/name-formatter';

import randomColor from '../utils/random-color';

function App() {
  const [columnDefs, setColumnDefs] = React.useState(() => [
    { field: 'id' },
    { field: 'first_name', cellRenderer: NameFormatter },
    { field: 'last_name' },
    { field: 'email' },
    { field: 'gender' },
    { field: 'ip_address' },
  ]);

  const updateColumns = () => {
    setColumnDefs([
      { field: 'id', cellStyle: { background: randomColor() } },
      { field: 'first_name', cellRenderer: NameFormatter },
      { field: 'last_name' },
      { field: 'email' },
      { field: 'gender' },
      { field: 'ip_address' },
    ]);
  };

  const defaultColDef = {
    filter: true,
    sortable: true,
  };

  return (
    <div>
      <button onClick={updateColumns} type="button">change columns</button>
      <Grid columnDefs={columnDefs} defaultColDef={defaultColDef} />
    </div>
  );
}

export default App;
