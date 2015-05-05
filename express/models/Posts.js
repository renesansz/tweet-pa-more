var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    message: String,
    created_at: {
        type: Date,
        default: Date.now()
    }
});

// Export schema
module.exports = PostSchema;