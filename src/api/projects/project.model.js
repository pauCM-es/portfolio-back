const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    subtitle: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    image: {
      type: String,
    },
    tags: {
      type: [String],
    },
    github: {
      type: String,
      trim: true
    },
    link: {
      type: String,
      trim: true
    },
  },
  {
    timestamps: true
  }
)

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;

