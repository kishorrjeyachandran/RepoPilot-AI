// backend/utils/staticEngine.js
// Static rule-based detection - works without AI

/**
 * Detect frameworks from dependencies
 */
export function detectFrameworks(dependencies) {
  const frameworks = [];

  // Frontend frameworks
  if (dependencies.react) frameworks.push("React");
  if (dependencies.next) frameworks.push("Next.js");
  if (dependencies.vue) frameworks.push("Vue.js");
  if (dependencies.angular) frameworks.push("Angular");
  if (dependencies.svelte) frameworks.push("Svelte");

  // Backend frameworks
  if (dependencies.express) frameworks.push("Express");
  if (dependencies.fastify) frameworks.push("Fastify");
  if (dependencies.nestjs) frameworks.push("NestJS");
  if (dependencies.django) frameworks.push("Django");
  if (dependencies.flask) frameworks.push("Flask");

  // Databases
  if (dependencies.mongoose) frameworks.push("Mongoose");
  if (dependencies.mongodb) frameworks.push("MongoDB");
  if (dependencies.sqlite3) frameworks.push("SQLite");
  if (dependencies.sequelize) frameworks.push("Sequelize");
  if (dependencies.typeorm) frameworks.push("TypeORM");

  // Styling
  if (dependencies.tailwindcss) frameworks.push("Tailwind CSS");
  if (dependencies["styled-components"])
    frameworks.push("Styled Components");
  if (dependencies.scss) frameworks.push("SCSS");

  // Dev tools
  if (dependencies.typescript) frameworks.push("TypeScript");
  if (dependencies.vite) frameworks.push("Vite");
  if (dependencies.webpack) frameworks.push("Webpack");
  if (dependencies.jest) frameworks.push("Jest");
  if (dependencies.vitest) frameworks.push("Vitest");

  // APIs & Utils
  if (dependencies.axios) frameworks.push("Axios");
  if (dependencies["@apollo/client"]) frameworks.push("Apollo GraphQL");
  if (dependencies.graphql) frameworks.push("GraphQL");

  return [...new Set(frameworks)]; // Remove duplicates
}

/**
 * Detect authentication methods from dependencies and file tree
 */
export function detectAuthentication(
  dependencies,
  fileTree = []
) {
  const auth = [];

  // JWT/Sessions
  if (
    dependencies.jwt ||
    dependencies["jsonwebtoken"]
  )
    auth.push("JWT");
  if (dependencies["express-session"])
    auth.push("Session-based");
  if (dependencies.passport) auth.push("Passport.js");

  // OAuth/Social
  if (dependencies["auth0"]) auth.push("Auth0");
  if (dependencies.firebase) auth.push("Firebase Auth");
  if (dependencies["google-auth-library"])
    auth.push("Google OAuth");

  // Files
  if (fileTree.some((f) => f.path.includes("auth")))
    auth.push("Custom auth module");
  if (fileTree.some((f) =>
    f.path.includes("middleware")
  ))
    auth.push("Middleware-based");

  return [...new Set(auth)];
}

/**
 * Detect routing patterns
 */
export function detectRouting(
  dependencies,
  fileTree = []
) {
  const routing = [];

  // Frontend routing
  if (dependencies["react-router-dom"])
    routing.push("React Router");
  if (dependencies["next/router"])
    routing.push("Next.js Router");
  if (dependencies["vue-router"])
    routing.push("Vue Router");

  // Backend routing (files)
  if (fileTree.some((f) => f.path.includes("/routes")))
    routing.push("File-based routes");
  if (fileTree.some((f) => f.path.includes("/api")))
    routing.push("API routes");

  return [...new Set(routing)];
}

/**
 * Detect state management
 */
export function detectStateManagement(
  dependencies
) {
  const stateTools = [];

  if (dependencies.redux) stateTools.push("Redux");
  if (dependencies["@reduxjs/toolkit"])
    stateTools.push("Redux Toolkit");
  if (dependencies.zustand)
    stateTools.push("Zustand");
  if (dependencies.jotai) stateTools.push("Jotai");
  if (dependencies.recoil)
    stateTools.push("Recoil");
  if (dependencies.mobx) stateTools.push("MobX");
  if (dependencies.pinia) stateTools.push("Pinia");

  return [...new Set(stateTools)];
}

/**
 * Detect testing frameworks
 */
export function detectTesting(dependencies) {
  const testing = [];

  if (dependencies.jest) testing.push("Jest");
  if (dependencies.vitest)
    testing.push("Vitest");
  if (dependencies.mocha)
    testing.push("Mocha");
  if (dependencies.chai) testing.push("Chai");
  if (dependencies.cypress)
    testing.push("Cypress");
  if (dependencies.playwright)
    testing.push("Playwright");
  if (dependencies.supertest)
    testing.push("Supertest");

  return [...new Set(testing)];
}

/**
 * Categorize important files
 */
export function categorizeFiles(fileTree = []) {
  const categories = {
    config: [],
    auth: [],
    api: [],
    components: [],
    utils: [],
    tests: [],
    database: [],
  };

  fileTree.forEach((file) => {
    const path = file.path.toLowerCase();

    if (
      path.includes("config") ||
      path.includes(".env") ||
      path.includes("settings")
    ) {
      categories.config.push(file.path);
    } else if (
      path.includes("auth") ||
      path.includes("login") ||
      path.includes("permission")
    ) {
      categories.auth.push(file.path);
    } else if (
      path.includes("/api/") ||
      path.includes("/routes/")
    ) {
      categories.api.push(file.path);
    } else if (
      path.includes("component") ||
      path.includes("widget")
    ) {
      categories.components.push(file.path);
    } else if (
      path.includes("util") ||
      path.includes("helper")
    ) {
      categories.utils.push(file.path);
    } else if (
      path.includes("test") ||
      path.includes(".spec") ||
      path.includes(".test")
    ) {
      categories.tests.push(file.path);
    } else if (
      path.includes("db") ||
      path.includes("model") ||
      path.includes("schema")
    ) {
      categories.database.push(file.path);
    }
  });

  // Keep only top files per category
  Object.keys(categories).forEach((key) => {
    categories[key] = categories[key].slice(
      0,
      5
    );
  });

  return categories;
}

/**
 * Build lightweight repository context for AI
 */
export function buildRepoContext(repoData) {
  return {
    name: repoData.name,
    owner: repoData.owner.login,
    description: repoData.description || "",
    url: repoData.html_url,
    languages: repoData.languages || [],
    frameworks: repoData.frameworks || [],
    dependencies: repoData.dependencies || [],
    importantFiles:
      repoData.importantFiles || {},
    readmeSnippet: repoData.readmeSnippet || "",
  };
}

/**
 * Generate static-only response (fallback when AI unavailable)
 */
export function generateStaticResponse(
  question,
  repoData,
  frameworks,
  dependencies
) {
  const question_lower = question
    .toLowerCase();

  // Framework detection questions
  if (
    question_lower.includes("framework") ||
    question_lower.includes("tech stack") ||
    question_lower.includes("technologies")
  ) {
    return {
      type: "static",
      answer: `This project uses: ${frameworks.join(", ") || "No major frameworks detected"}. Dependencies include: ${dependencies.slice(0, 5).join(", ")}.`,
    };
  }

  // Architecture questions
  if (
    question_lower.includes("architecture") ||
    question_lower.includes("structure")
  ) {
    const categories = repoData.importantFiles
      || {};
    let structure =
      "Project structure:\n";
    if (categories.config)
      structure += `- Config files: ${categories.config[0] || "Found"}\n`;
    if (categories.api)
      structure += `- API routes: ${categories.api[0] || "Found"}\n`;
    if (categories.components)
      structure += `- Components: Located in components folder\n`;
    if (categories.database)
      structure += `- Database layer: ${categories.database[0] || "Found"}\n`;

    return {
      type: "static",
      answer: structure,
    };
  }

  // Dependency questions
  if (
    question_lower.includes(
      "dependency"
    ) ||
    question_lower.includes("dependencies")
  ) {
    return {
      type: "static",
      answer: `Main dependencies: ${dependencies.slice(0, 10).join(", ")}.`,
    };
  }

  // Generic fallback
  return {
    type: "static",
    answer: `Repository: ${repoData.name}. Using: ${frameworks.join(", ") || "Multiple technologies"}. Ask me something specific about the codebase!`,
  };
}
