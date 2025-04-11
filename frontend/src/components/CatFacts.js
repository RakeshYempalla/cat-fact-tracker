import React, { useState } from 'react';
import { getAllCatFacts } from '../api';

function CatFacts() {
  const [catFacts, setCatFacts] = useState([]);
  const [showFacts, setShowFacts] = useState(false);

  const handleToggleFacts = async () => {
    if (!showFacts) {
      // Show facts: fetch from backend
      const facts = await getAllCatFacts();
      if (facts) setCatFacts(facts);
    }
    // Toggle visibility
    setShowFacts(!showFacts);
  };

  return (
    <div>
      <h2>All Cat Facts</h2>
      <button onClick={handleToggleFacts}>
        {showFacts ? 'Hide Cat Facts' : 'Show All Cat Facts'}
      </button>

      {showFacts && (
        <ul>
          {catFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CatFacts;
