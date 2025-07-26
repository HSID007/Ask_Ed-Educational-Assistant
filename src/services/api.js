import axios from 'axios';

export const getLLMResponse = async (query, model) => {
  try {
    const response = await axios.post(`https://your-api.com/${model}`, {
      input: query,
    });
    return response.data;
  } catch (error) {
    return { answer: 'Error: unable to fetch response.' };
  }
};
