import * as React from 'react';

const NameFormatter = React.memo(({ value }) => {
  const renderCountRef = React.useRef(1);
  return (
    <strong>
      {`(${renderCountRef.current++}) ${value}`}
    </strong>
  );
});

export default NameFormatter;
