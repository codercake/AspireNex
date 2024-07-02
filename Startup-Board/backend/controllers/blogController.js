const { BlogPost } = require('../models');

const createBlogPost = async (req, res) => {
  try {
    const blogPost = new BlogPost(req.body);
    await blogPost.save();
    res.status(201).send(blogPost);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author');
    res.send(blogPosts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getBlogPostById = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id).populate('author');
    if (!blogPost) return res.status(404).send();
    res.send(blogPost);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!blogPost) return res.status(404).send();
    res.send(blogPost);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!blogPost) return res.status(404).send();
    res.send(blogPost);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createBlogPost, getBlogPosts, getBlogPostById, updateBlogPost, deleteBlogPost };