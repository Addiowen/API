const mongoose = require('mongoose');

// Developer Schema
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [String],
    url: String,
  });

const socialMediaSchema = new mongoose.Schema({
    github: String,
    linkedin: String,
    twitter: String
});

const developerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    skills: [String],
    projects: [projectSchema],
    socialMedia: socialMediaSchema,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Developer Model
const Developer = mongoose.model('Developer', developerSchema);
module.exports = Developer;