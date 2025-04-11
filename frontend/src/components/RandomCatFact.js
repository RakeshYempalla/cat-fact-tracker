import React, { useState, useEffect } from 'react';
import { getRandomCatFact } from '../api';

// Component to display a single random cat fact on initial render
function RandomCatFact() {
  const [randomFact, setRandomFact] = useState(''); // Holds the random cat fact

  useEffect(() => {
    // Fetches a random cat fact from the backend API
    const fetchFact = async () => {
      const fact = await getRandomCatFact();
      if (fact) setRandomFact(fact); // Update state with fetched fact
    };
    fetchFact(); // Trigger fetch once on mount
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div>
      <h2>Random Cat Fact</h2>
      <p>{randomFact}</p>
    </div>
  );
}

export default RandomCatFact;

