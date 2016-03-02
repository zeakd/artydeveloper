import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
    title: String,
    html: String,
    date: { type: Date, default: Date.now }
})

export default mongoose.model('Post', postSchema);