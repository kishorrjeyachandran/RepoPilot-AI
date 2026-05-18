import RepoCard from "../components/RepoCard";
import { exampleRepos } from "../data/exampleRepos";

const ExampleReposSection = () => {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-400">
            Try Examples
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Analyze Popular Repository Types
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {exampleRepos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleReposSection;