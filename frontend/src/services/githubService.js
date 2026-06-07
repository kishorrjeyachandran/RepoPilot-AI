import axios from "axios";

const API =
  "http://localhost:5000/api/github";

export const analyzeRepository =
  async (repoUrl) => {
    const response =
      await axios.post(
        `${API}/analyze`,
        {
          repoUrl,
        }
      );

    return response.data;
  };