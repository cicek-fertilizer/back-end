'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    productId: {
        type: Number,
        unique: true,
        required: 'productId is required'
    },
    productName: String,
    tags: [{ tag: String }],
    imageUrl: String,
    star: Number,
});
var commentSchema = new Schema({
    commentId: {
        type: Number,
        unique: true,
        required: 'UserId is required'
    },
    userId: Number,
    productId: Number,
    commentBody: String,
    star: Number
});
var storeSchema = new Schema({
    storeId: {
        type: Number,
        unique: true,
        required: 'storeId is required'
    },
    storeName: String,
    location: {lat: Number, lon: Number},
    city: String,
    district: String 

});
var userSchema = new Schema({
    userId: {
        type: Number,
        unique: true,
        required: 'UserId is required'
    },
    userName: {
        type: String,
        required: "UserName is required",
    },
    password: String
});
var adminSchema = new Schema({
    adminId: {
        type: Number,
        unique: true,
        required: 'UserId is required'
    },
    adminName: {
        type: String,
        required: "UserName is required",
    },
    password: {
        type: String,
        required: "UserName is required",
    },
    storeId: {
        type: Number,
        required: "UserName is required",
    },
    imageUrl: String
});
var productLookSchema = new Schema({
    productLookId: {
        type: Number,
    },
    userId: {
        type: Number,
        required: 'userId is required'
    },
    productId: {
        type: Number,
        required: 'productId is required'
    },
    storeId: {
        type: Number,
        required: 'storeId is required'
    },
    date: String
});

module.exports = mongoose.model('products', productSchema);
module.exports = mongoose.model('productLooks', productLookSchema);
module.exports = mongoose.model('comments', commentSchema);
module.exports = mongoose.model('stores', storeSchema);
module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('admins', userSchema);