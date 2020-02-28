const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    originalLink:{
type: String,
        required: true
    },
    shortUrl:{
        type: String
    }
});

const Link = mongoose.model('Link',linkSchema);

module.exports = Link;