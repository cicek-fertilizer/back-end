'use strict';

let mongoose = require('mongoose'),
    Product = mongoose.model('products'),
    ProductLook = mongoose.model('productLooks'),
    Comment = mongoose.model('comments');
    
const productController = require('../controller/productController');

exports.list_all_comments = function (req, res) {
    Comment.find({}, function (err, message) {
        if (err)
            res.status(400).send(err);
        res.json(message);
    });
};

exports.create_new_comment = function (req, res) {
    let new_comment = new Comment(req.body);

    new_comment.save(function (err, message) {
        if (err)
            res.send(err);
        res.json(message);
    });
};

exports.get_comments = async function (req, res) {
    let today = new Date();
    console.log(today);
    try {
        let new_look = new ProductLook({productId: req.body.productId , userId: req.body.userId , storeId: req.body.userId, date: today });
        new_look.save();
    } catch (error) {
        console.log("Nope");
    }
    let response = {};

    await Product.find({productId: req.body.productId }, function (err, message) {
        response.product = message;
    });

    await Comment.find({productId: req.body.productId}, function (err, message) {
        if (!message.length) {
            res.status(404).send("Not found");
        } else {
            response.comments = message;
        }
    });
    res.json(response);
};

exports.delete_a_comment = function (req, res) {
    Comment.remove({
        comment: req.body.commentId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({comment: 'Comment successfully deleted'});
    });
};