import axios from 'axios';


const API_URL = 'https://meta-llama-3-1-405b1.p.rapidapi.com/chat';
const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY;

export const fetchSummary = async (url: string): Promise<string> => {
  try {
    const response = await axios.post(
      API_URL,
      {
        messages: [
            {
                role: 'user',
                content: 'Why is the sky blue?', // ✅ Use a static prompt for testing
              },
        //   {
        //     role: 'user',
        //     content: `Summarize the product reviews from this URL: ${url}`,
        //   },
        
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'meta-llama-3-1-405b1.p.rapidapi.com',
          'x-rapidapi-key': RAPID_API_KEY,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Failed to fetch summary. Please check the URL or try again.');
  }
};
