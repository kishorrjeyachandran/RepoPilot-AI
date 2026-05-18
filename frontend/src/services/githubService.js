import axios from "axios";

const API_URL = "http://localhost:5000/api/github";

export const analyzeRepository = async (repoUrl) => {
  const response = await axios.post(
    `${API_URL}/analyze`,
    {
      repoUrl,
    }
  );

  return response.data;
};