export const extractRepoInfo = (repoUrl) => {
  try {
    const url = new URL(repoUrl);

    const pathParts = url.pathname
      .split("/")
      .filter(Boolean);

    if (pathParts.length < 2) {
      return null;
    }

    return {
      owner: pathParts[0],
      repo: pathParts[1],
    };
  } catch (error) {
    return null;
  }
};