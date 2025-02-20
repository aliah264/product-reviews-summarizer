import axios from 'axios';

const API_URL = 'https://meta-llama-3-1-405b1.p.rapidapi.com/chat';

export const fetchSummary = async (url: string) => {
  const prompt = `Summarize the product reviews found at this URL: ${url}`;

  try {
    const response = await axios.post(
      API_URL,
      {
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }
    );

    return response.data.choices?.[0]?.message?.content || 'No summary found.';
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch summary.');
  }
};
