const express = require('express')
const router = express.Router()
const {getAllPosts,addPost,getSinglePost} = require('../controllers/blogs')

router.route('/').get(getAllPosts).post(addPost)
router.route('/:id').get(getSinglePost)

module.exports = router