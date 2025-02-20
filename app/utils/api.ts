import axios from 'axios';

export const fetchSummary = async (url: string) => {
  try {
    const response = await axios.post('https://api.example.com/summarize', { url });
    return response.data.summary;
  } catch (error) {
    throw new Error('Failed to fetch summary.');
  }
};
