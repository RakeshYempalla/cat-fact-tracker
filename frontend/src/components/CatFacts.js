import React, { useState, useEffect } from 'react';
import { getAllCatFacts } from '../api';

function CatFacts() {
  const [catFacts, setCatFacts] = useState([]);
  const [showFacts, setShowFacts] = useState(false);  // State to control visibility of facts

  // Fetch all cat facts when the component is mounted
  useEffect(() => {
    const fetchCatFacts = async () => {
      const facts = await getAllCatFacts();
      setCatFacts(facts);
    };
    fetchCatFacts();
  }, []);

  // Toggle visibility of the cat facts list
  const toggleFacts = () => {
    setShowFacts(!showFacts);
  };

  return (
    <div>
      <h2>All Cat Facts</h2>
      <button onClick={toggleFacts}>
        {showFacts ? 'Hide All Cat Facts' : 'Show All Cat Facts'}
      </button>

      {/* Show the cat facts list only if showFacts is true */}
      {showFacts && (
        <ul>
          {catFacts.map((fact, index) => (
            <li key={index}>{fact[1]}</li>  /* fact[1] is the actual cat fact */
          ))}
        </ul>
      )}
    </div>
  );
}

export default CatFacts;


