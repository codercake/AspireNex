const express = require('express');
const { createBlogPost, getBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPost } = require('../controllers/blogController');
const router = express.Router();

router.post('/', createBlogPost);
router.get('/', getBlogPosts);
router.get('/:id', getBlogPostById);
router.put('/:id', updateBlogPost);
router.delete('/:id', deleteBlogPost);

module.exports = router;