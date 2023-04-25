//blog router
const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');

// const blogValidation = require('../../validations/blog.validation');
const blogController = require('../../controllers/blog.controller');

const router = express.Router();

router
    .route('/')
    .post(/*auth('manageBlogs'), validate(blogValidation.createBlogPost),*/ blogController.createBlogPost)
    .get(/*validate(blogValidation.getAllBlogPosts),*/ blogController.getAllBlogPosts);

module.exports = router;
