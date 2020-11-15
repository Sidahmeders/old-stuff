const express = require('express');
const router = express.Router();
const Post = require('../models/post')


//* get back all the posts
router.get('/', async (req, res) => {
    const posts = await Post.find();
    try {
        res.status(200).json(posts)
    } catch(err) {
        res.status(400).json({ errorMessage: err.message })
    }
})

//* submits a post
router.post('/', async (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description
    })
    const post = await newPost.save();
    try {
        res.status(200).json(post)
    } catch(err) {
        res.status(400).json({ errorMessage: err.message })
    }
})

//* get a specific post
router.get('/:postId', async (req, res) => {
    const post = await Post.findById(req.params.postId);
    try {
        res.status(200).json(post)
    } catch(err) {
        res.status(400).json({ errorMessage: err.message })
    }
})

//* delete a specific post
router.delete('/:postId',async (req, res) => {
    const removedPost = await Post.remove({_id: req.params.postId});
    try {
        res.status(200).json(removedPost)
    } catch(err) {
        res.status(400).json({errorMessage: err.message})
    }
})

//* 'PUT' is used to update the entire object and 'PATCH' is used to update a single property
//* update a specific post
router.patch('/:postId', async (req, res) => {
    const upDatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title} });
    try {
        res.status(200).json(upDatedPost)
    } catch(err) {
        res.status(400).json({ errorMessage: err.message})
    }
})


module.exports = router;
