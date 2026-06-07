import {
  getRepositoryContext,
} from "./repositoryStore";

export const answerQuestion =
  async (question) => {
    const repo =
      getRepositoryContext();

    if (!repo) {
      return "No repository loaded.";
    }

    const q =
      question.toLowerCase();

    if (
      q.includes(
        "architecture"
      )
    ) {
      return `
Repository: ${repo.name}

Frameworks:
${repo.frameworks?.join(", ")}

Languages:
${repo.languages?.join(", ")}

Dependencies:
${repo.dependencies?.length}
      `;
    }

    if (
      q.includes("files")
    ) {
      return `
Important Files:

${repo.fileTree
  ?.slice(0, 20)
  .map((f) => f.path)
  .join("\n")}
      `;
    }

    if (
      q.includes(
        "dependencies"
      )
    ) {
      return repo.dependencies
        ?.join(", ");
    }

    return `
Repository:
${repo.name}

Languages:
${repo.languages?.join(", ")}

Frameworks:
${repo.frameworks?.join(", ")}

Files:
${repo.metrics?.totalFiles}
    `;
  };