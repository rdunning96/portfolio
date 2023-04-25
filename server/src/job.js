const { blogService } = require('./services');

async function myScheduledJob() {
  try {
    const result = await blogService.createRandomBlogPost();
    console.log('Scheduled job completed successfully', result);
  } catch (error) {
    console.error('Scheduled job failed', error);
  }
}

module.exports = { myScheduledJob };
