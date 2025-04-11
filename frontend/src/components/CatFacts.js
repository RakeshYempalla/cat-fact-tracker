import React, { useState } from 'react';
import { getAllCatFacts } from '../api';

// Component to toggle and display all cat facts
function CatFacts() {
  const [catFacts, setCatFacts] = useState([]);       // Holds the list of cat facts
  const [showFacts, setShowFacts] = useState(false);  // Controls visibility of the fact list

  // Toggles visibility of the facts and fetches them if not already shown
  const handleToggleFacts = async () => {
    if (!showFacts) {
      const facts = await getAllCatFacts();
      if (facts) setCatFacts(facts); // Update state with fetched facts
    }
    setShowFacts(!showFacts); // Toggle visibility state
  };

  return (
    <div>
      <h2>All Cat Facts</h2>

      {/* Button toggles fact list visibility */}
      <button onClick={handleToggleFacts}>
        {showFacts ? 'Hide Cat Facts' : 'Show All Cat Facts'}
      </button>

      {/* Conditionally render facts if showFacts is true */}
      {showFacts && (
        <ul>
          {catFacts.map((fact, index) => (
            <li key={index}>{fact}</li>  // Render each fact as list item
          ))}
        </ul>
      )}
    </div>
  );
}

export default CatFacts;

