const express = require('express');
const User = require('./users-model');
const Post = require('../posts/posts-model');

// You will need `users-model.js` and `posts-model.js` both
// The middleware functions also need to be required
const { validateUserId, validateUser, validatePost } = require('../middleware/middleware');
const router = express.Router();

router.get('/', async (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  const users = await User.get();
  res.status(200).json(users);
});

router.get('/:id', validateUserId, async (req, res) => {
  // RETURN THE USER OBJECT
  const user = await User.getById(req.user.id);
  res.status(200).json(user);
  // this needs a middleware to verify user id
});

router.post('/', validateUser, async (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  await User.insert(req.body);
  res.status(200).json(req.body);
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', validateUserId, validateUser, async (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  await User.update(req.user.id, req.body)
  res.status(200).json(req.user);
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', validateUserId, async (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  await User.remove(req.user.id)
  res.status(200).json(req.user);
});

router.get('/:id/posts', validateUserId, async (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  const userPosts = await User.getUserPosts(req.user.id);
  res.status(200).json(userPosts);
  // this needs a middleware to verify user id
});

router.post('/:id/posts', validateUserId, validatePost, async (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  await Post.insert(req.body);
  res.status(200).json(req.user.body);
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
module.exports = router;
