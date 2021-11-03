const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const blogs = require('./routes/blogs')

require('dotenv').config()


// Middleware
app.use(express.json());

app.use('/api/v1/posts',blogs)


const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,() => {
            console.log('Server listening on port 5000...');
        })
    } catch (error) {
        console.log(error);
    }
}

start()