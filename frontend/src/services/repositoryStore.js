let repositoryContext = null;

export const setRepositoryContext = (data) => {
  repositoryContext = data;
};

export const getRepositoryContext = () => {
  return repositoryContext;
};

export const clearRepositoryContext = () => {
  repositoryContext = null;
};