const mongoose = require('mongoose');

// Data Structure for Collection 'Users'
const widgetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:    { type: String, required: true },
    subtitle: { type: String, required: true },
    content: { type: String, required: true }
});

// Mongoose Model
const Widgets = mongoose.model('widgets', widgetSchema, 'widgets');

//export model
module.exports = Widgets;