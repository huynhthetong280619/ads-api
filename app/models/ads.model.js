const mongoose = require('mongoose');

const AdsSchema = mongoose.Schema({
    title: String,
    content: String,
    urlImage: String,
    beginTime: Date,
    expireTime: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Ads', AdsSchema);
