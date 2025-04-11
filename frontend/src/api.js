// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';  // Adjust to your backend URL

// Fetch all cat facts
export const getAllCatFacts = async () => {
  try {
    const response = await axios.get(`${API_URL}/catfacts`);
    return response.data.cat_facts;
  } catch (error) {
    console.error('Error fetching cat facts:', error);
  }
};

// Fetch a random cat fact
export const getRandomCatFact = async () => {
  try {
    const response = await axios.get(`${API_URL}/catfacts/random`);
    return response.data.fact;
  } catch (error) {
    console.error('Error fetching random cat fact:', error);
  }
};

// Add a new cat fact
export const addCatFact = async (fact) => {
  try {
    console.log('adding cat fact:',fact)
    const response = await axios.post(`${API_URL}/catfacts`, { fact });
    return response.data;
  } catch (error) {
    console.error('Error adding cat fact:', error);
    return null;
  }
};
