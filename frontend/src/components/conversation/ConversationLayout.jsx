import { useState } from "react";

import IntroMessage from "./IntroMessage";
import RepoInput from "./RepoInput";
import LoadingSequence from "./LoadingSequence";
import QuickActions from "./QuickActions";

import {
  analyzeRepository,
} from "../../services/githubService";

import {
  setRepositoryContext,
} from "../../services/repositoryStore";

const ConversationLayout = () => {
  const [loading, setLoading] =
    useState(false);

  const [loaded, setLoaded] =
    useState(false);

  const [repoData, setRepoData] =
    useState(null);

  const handleRepository =
    async (repoUrl) => {
      try {
        setLoading(true);

        const data =
          await analyzeRepository(
            repoUrl
          );

        setRepositoryContext(
          data
        );

        setRepoData(data);

        setLoaded(true);
      } catch (error) {
        console.error(error);

        alert(
          "Repository analysis failed."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16">

      <IntroMessage />

      {!loading &&
        !loaded && (
          <RepoInput
            onSubmit={
              handleRepository
            }
          />
        )}

      {loading && (
        <LoadingSequence />
      )}

      {loaded && (
        <QuickActions
          repoData={repoData}
        />
      )}

    </div>
  );
};

export default ConversationLayout;