const mongoose = require('mongoose')
const Review = require('./review')

const blogSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },

    desc: {
        type: String
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
});


const Product = mongoose.model('Product', blogSchema);

module.exports = Product;