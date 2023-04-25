//blog controller
const httpStatus = require('http-status');
const pick = require('../utils/pick');

const catchAsync = require('../utils/catchAsync');
const { blogService } = require('../services');

const createBlogPost = catchAsync(async (req, res) => {
  const blogPost = await blogService.createRandomBlogPost();
  res.status(httpStatus.CREATED).send(blogPost);
});

const getAllBlogPosts = catchAsync(async (req, res) => {
  const filter = { published: true };
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await blogService.queryBlogPosts(filter, options);
  res.send(result);
});

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};
  
