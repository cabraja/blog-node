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

const getSinglePost = async(req,res) => {
    try {
        const {id} = req.params
        const singlePost = await Post.findById(id)
        res.status(400).json({singlePost})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}




module.exports = {getAllPosts,addPost,getSinglePost}