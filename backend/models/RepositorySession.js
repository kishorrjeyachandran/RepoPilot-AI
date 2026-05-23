import mongoose from "mongoose";

const messageSchema =
  new mongoose.Schema(
    {
      role: String,

      content: String,
    },
    {
      _id: false,
    }
  );

const repositorySessionSchema =
  new mongoose.Schema(
    {
      repoName: {
        type: String,
      },

      repoUrl: {
        type: String,
      },

      repoData: {
        type: Object,
      },

      chatHistory: [messageSchema],
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "RepositorySession",
  repositorySessionSchema
);