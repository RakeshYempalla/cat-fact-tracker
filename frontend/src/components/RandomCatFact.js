import React, { useState, useEffect } from 'react';
import { getRandomCatFact } from '../api';

function RandomCatFact() {
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    const fetchRandomFact = async () => {
      const fact = await getRandomCatFact();
      if (fact) {
        setRandomFact(fact);
      }
    };
    fetchRandomFact();
  }, []);

  return (
    <div>
      <h2>Random Cat Fact</h2>
      {randomFact ? (
        <p>{randomFact}</p>
      ) : (
        <p>Loading random cat fact...</p>
      )}
    </div>
  );
}

export default RandomCatFact;
