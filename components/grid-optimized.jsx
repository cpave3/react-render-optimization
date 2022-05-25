import { AgGridReact } from "ag-grid-react";
import * as React from "react";
import getData from "../utils/get-data";

function Grid({ columnDefs, defaultColDef, pagination }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      setData(getData(100));
    })();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: "98vh" }}>
      <AgGridReact
        key={pagination ? "paginated" : "not-paginated"}
        maintainColumnOrder
        defaultColDef={defaultColDef}
        rowData={data}
        columnDefs={columnDefs}
        pagination={pagination}
      />
    </div>
  );
}

export default Grid;
