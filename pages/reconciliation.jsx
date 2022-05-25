import * as React from 'react';

const Counter = ({ count }) => {
    const element = <div>Counter: {count}</div>
    console.log({ element });
    return element;
};

const Reconciliation = () => {
    const [count, setCount] = React.useState(0);

    return <div>
        <button onClick={() => setCount(old => old + 1)}>Increment</button>
        <Counter count={count} />
    </div>
};

export default Reconciliation;