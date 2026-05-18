import axios from "axios";

export const fetchRepositoryData = async (owner, repo) => {
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}`
  );

  return response.data;
};