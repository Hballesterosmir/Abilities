const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: String,
    description: String,
    hashtag: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    files: Array,
});

export default mongoose.model('question', questionSchema);

