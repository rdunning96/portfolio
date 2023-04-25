const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Technology', 'Sports', 'Lifestyle', 'Travel', 'Business'],
    required: true
  },
  published: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

blogSchema.plugin(paginate);
blogSchema.plugin(toJSON);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
