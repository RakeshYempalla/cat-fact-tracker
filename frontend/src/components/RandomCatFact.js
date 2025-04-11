import React, { useState, useEffect } from 'react';
import { getRandomCatFact } from '../api';

function RandomCatFact() {
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    const fetchRandomFact = async () => {
      const fact = await getRandomCatFact();
      setRandomFact(fact);
    };
    fetchRandomFact();
  }, []);

  return (
    <div>
      <h2>Random Cat Fact</h2>
      <p>{randomFact}</p>
    </div>
  );
}

export default RandomCatFact;
