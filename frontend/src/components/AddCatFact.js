import React, { useState } from 'react';
import { addCatFact } from '../api';

// Component for submitting a new cat fact
function AddCatFact({ onFactAdded }) {
  const [fact, setFact] = useState(''); // State to hold the input fact text

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate non-empty, trimmed input
    if (!fact.trim()) {
      alert('Please enter a cat fact');
      return;
    }

    const response = await addCatFact(fact);

    if (response && response.result === 'Cat fact added successfully') {
      alert('Fact added successfully!');
      setFact(''); // Reset input field

      // Notify parent component to refresh the fact list, if handler is provided
      if (onFactAdded) {
        onFactAdded();
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
        {/* Disable submit button if input is empty */}
        <button type="submit" disabled={!fact.trim()}>Add Fact</button>
      </form>
    </div>
  );
}

export default AddCatFact;
