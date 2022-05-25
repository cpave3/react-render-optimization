import { AgGridReact } from 'ag-grid-react';
import * as React from 'react';
import getData from '../utils/get-data';

function Grid({ columnDefs, defaultColDef }) {
  const data = getData(10);

  return (
    <div className="ag-theme-alpine" style={{ height: '98vh' }}>
      <AgGridReact
        maintainColumnOrder
        defaultColDef={defaultColDef}
        rowData={data}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default Grid;
