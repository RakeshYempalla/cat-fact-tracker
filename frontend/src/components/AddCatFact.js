import React, { useState } from 'react';
import { addCatFact } from '../api';

function AddCatFact({ onFactAdded }) {
  const [fact, setFact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fact.trim()) {
      alert('Please enter a cat fact');
      return;
    }
    const response = await addCatFact(fact);
    if (response && response.result === 'Cat fact added successfully') {
      alert('Fact added successfully!');
      setFact('');
      if (onFactAdded) {
        onFactAdded(); //parent to refresh facts
      }
    } else {
      alert('Error adding cat fact');
    }
  };

  return (
    <div>
      <h2>Add a New Cat Fact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fact}
          onChange={(e) => setFact(e.target.value)}
          placeholder="Enter a cat fact"
        />
        <button type="submit" disabled={!fact.trim()}>Add Fact</button>
      </form>
    </div>
  );
}

export default AddCatFact;