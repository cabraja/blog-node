const Post = require('../models/Post')

const getAllPosts = async(req,res) => {
    try {
        const allPosts = await Post.find({})
        res.status(200).json({allPosts})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

const addPost = async(req,res) => {
    try {
        const newPost = await Post.create(req.body)
        res.status(201).json({newPost})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}


module.exports = {getAllPosts,addPost}