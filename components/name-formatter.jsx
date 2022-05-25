import * as React from "react";

function NameFormatter({ value }) {
  const renderCountRef = React.useRef(1);
  return <strong>{`(${renderCountRef.current++}) ${value}`}</strong>;
}

export default NameFormatter;
