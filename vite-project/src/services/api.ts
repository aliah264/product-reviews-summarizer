import axios from 'axios';

const API_URL = 'https://meta-llama-3-1-405b1.p.rapidapi.com/chat';
const RAPID_API_KEY = '22d31a77bdmsh252ba3237e42729p145fb9jsnfa398962b84a';

/**
 * Fetches a summary from the Meta LLaMA 3.1 405B API.
 * @param url - URL containing product reviews to summarize.
 * @returns Summary string from the API.
 */

export const fetchSummary = async (url: string, reviewsText: string): Promise<string> => {
    try {
      const response = await axios.post(
        API_URL,
        {
          messages: [
            {
              role: 'user',
              content: `
  Please provide a neatly structured summary of the product reviews from this URL: ${url}.
  
  The format should be:
  ### 📝 Summary  
  A concise paragraph explaining overall sentiment.
  
  ### ✅ Pros  
  - Use bullet points  
  - Keep sentences short and clear  
  
  ### ❌ Cons  
  - Use bullet points  
  - Mention notable downsides  
  
  ### 🔔 Final Recommendation  
  One friendly sentence.
  
  Format everything in markdown for better display. Keep the summary easy to read and professional.
              
  Reviews: ${reviewsText}
              `,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-key': RAPID_API_KEY,
            'x-rapidapi-host': 'meta-llama-3-1-405b1.p.rapidapi.com',
          },
        }
      );
  
      return response.data.choices[0].message.content.trim();
    } catch (error: any) {
      console.error('API Error:', error.response?.data || error.message);
      throw new Error('Failed to fetch summary. Please check console for details.');
    }
  };  