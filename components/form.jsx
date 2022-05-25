import * as React from 'react';

// todo: replace with better mock
const fetchWord = (word) => Promise.resolve({ entries: [word] });

export default function Form() {
  const [input, setInput] = React.useState('');
  const [entries, setEntries] = React.useState(null);

  // OPT: debounce
  React.useEffect(() => {
    const updateEntries = async (word) => {
      const response = await fetchWord(word);
      setEntries(response.entries);
    };

    if (input) {
      updateEntries(input);
    } else {
      setEntries(null);
    }
  }, [input]);

  const handleInputChange = React.useCallback((event) => {
    event.preventDefault();
    setInput(event.target.value);
  }, []);

  return (
    <div>
      <input value={input} onChange={handleInputChange} />
      <div>{JSON.stringify(entries)}</div>
    </div>
  );
}
