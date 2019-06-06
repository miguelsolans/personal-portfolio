const mongoose = require('mongoose');

// Data Structure for Collection 'Jobs'
const contentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:      { type: String,  required: true   },
    content:    { type: String,  required: false   },
    flag:       { type: Boolean, required: false  }
});

// Mongoose Model
const Content = mongoose.model('content', contentSchema, 'content');

//export model
module.exports = Content;