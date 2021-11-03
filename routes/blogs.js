const express = require('express')
const router = express.Router()
const {getAllPosts,addPost} = require('../controllers/blogs')

router.route('/').get(getAllPosts).post(addPost)

module.exports = router