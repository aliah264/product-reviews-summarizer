import axios from 'axios';

const API_URL = 'https://api.example.com/summarize'; // Replace with actual API

export const fetchSummary = async (url: string) => {
  try {
    const response = await axios.post(API_URL, { url });
    return response.data.summary;
  } catch (error) {
    throw new Error('Failed to fetch summary');
  }
};
