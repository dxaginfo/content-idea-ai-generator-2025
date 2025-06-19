const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    enum: ['blog', 'video', 'social'],
    required: true
  },
  keywords: [String],
  industry: String,
  aiGenerated: {
    type: Boolean,
    default: true
  },
  favorite: {
    type: Boolean,
    default: false
  },
  scheduledDate: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('idea', IdeaSchema);
