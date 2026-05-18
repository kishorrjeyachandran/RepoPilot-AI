import { extractRepoInfo } from "../utils/extractRepoInfo.js";
import { fetchRepositoryData } from "../services/githubService.js";

export const analyzeRepository = async (req, res) => {
  try {
    const { repoUrl } = req.body;

    if (!repoUrl) {
      return res.status(400).json({
        success: false,
        message: "Repository URL is required",
      });
    }

    const repoInfo = extractRepoInfo(repoUrl);

    if (!repoInfo) {
      return res.status(400).json({
        success: false,
        message: "Invalid GitHub repository URL",
      });
    }

    const repository = await fetchRepositoryData(
      repoInfo.owner,
      repoInfo.repo
    );

    return res.json({
      success: true,
      data: {
        name: repository.name,
        description: repository.description,
        stars: repository.stargazers_count,
        forks: repository.forks_count,
        language: repository.language,
        owner: repository.owner.login,
        avatar: repository.owner.avatar_url,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to analyze repository",
      error: error.message,
    });
  }
};