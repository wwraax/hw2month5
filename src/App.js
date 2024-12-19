import React, { useState, useEffect } from 'react';

const App = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    const names = JSON.parse(localStorage.getItem('names'))
    setNames(names);
  }, []);

  const changename = (event) => {
    setNewName(event.target.value);
  };

  const name = () => {
    if (newName === '') return;

    const nnames = [...names, newName];
    setNames(nnames);

    localStorage.setItem('names', JSON.stringify(nnames));

    setNewName('');
  };

  return (
    <div>
      <input
        type="text" value={newName} onChange={changename}
      />
      <button onClick={name}>Add name</button>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

