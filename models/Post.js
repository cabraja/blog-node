const mongoose = require('mongoose')

const {Schema} = mongoose

const postSchema = new Schema({
    title: {
        type:String,
        required:true,
        trim:true,
        maxLength:[50,'Name too long']
    },
    author:{
        type:String,
        required:false,
        maxLength:[30,'Name can not fit']
    },
    body:{
        type:String,
        required: true
    },
    date: { 
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Post',postSchema)