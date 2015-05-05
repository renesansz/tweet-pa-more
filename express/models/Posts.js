var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    username: String,
    message: String,
    created_at: {
        type: Date,
        default: Date.now()
    }
});

// Export schema
module.exports = PostSchema;