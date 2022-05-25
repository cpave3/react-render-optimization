import * as React from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import Grid from "../components/grid-optimized";
import NameFormatter from "../components/name-formatter-optimized";

import randomColor from "../utils/random-color";

const cellStyle = { background: randomColor() };

function App() {
  const [columnDefs, setColumnDefs] = React.useState(() => [
    { field: "id" },
    { field: "first_name", cellRenderer: NameFormatter },
    { field: "last_name" },
    { field: "email" },
    { field: "gender" },
    { field: "ip_address" },
  ]);

  const [pagination, setPagination] = React.useState(false);

  const updateColumns = () => {
    setColumnDefs([
      { field: "id", cellStyle },
      { field: "first_name", cellRenderer: NameFormatter },
      { field: "last_name" },
      { field: "email" },
      { field: "gender" },
      { field: "ip_address" },
    ]);
  };

  const togglePagination = () => {
    setPagination((old) => !old);
  };

  const defaultColDef = React.useMemo(
    () => ({
      filter: true,
      sortable: true,
    }),
    []
  );

  return (
    <div>
      <button onClick={updateColumns} type="button">
        change columns
      </button>
      <button onClick={togglePagination}>toggle pagination</button>
      <Grid
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={pagination}
      />
    </div>
  );
}

export default App;
