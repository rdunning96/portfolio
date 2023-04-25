//blog service
const httpStatus = require('http-status');
const { Blog } = require('../models');
const ApiError = require('../utils/ApiError');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
/**
 * Create a blog post
 * @param {Object} blogPostBody
 * @returns {Promise<Blog>}
 * */
const createBlogPost = async (blogPostBody) => {
  return Blog.create(blogPostBody);
}

/**Create random blog post
 * @returns {Promise<Blog>}
 */
const createRandomBlogPost = async (subject) => {
  if (!configuration.apiKey) {
    return 'OpenAI API key not configured, please follow instructions in README.md';
  }
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(),
      // max_tokens: 2048,
      temperature: 0.6,
    });
    //convert json to string
    console.log(JSON.stringify(completion.data.choices));
    return Blog.create({
      title: 'Random Blog Post',
      content: completion.data.choices[0].text,
      category: 'Technology',
      published: true
    });
    //return completion.data.choices[0].text;
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return error.response.data;
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return 'Error with OpenAI API request'
    }
  }
};

const queryBlogPosts = async (filter, options) => {
  //get raw blog posts without pagination
  const blogPosts = await Blog.find({});
  return blogPosts;
}

module.exports = {
  createBlogPost,
  createRandomBlogPost,
  queryBlogPosts,
};

function generatePrompt() {
  return `Blog post title:
  Blog post body:
  `;
}
