'use strict';

let mongoose = require('mongoose'),
    Product = mongoose.model('products'),
    Comment = mongoose.model('comments'),
    ProductLook = mongoose.model('productLooks');


exports.list_all_products = function (req, res) {
    Product.find({}, function (err, message) {
        if (err)
            res.status(400).send(err);
        res.json(message);
    });
};

exports.list_all_productLooks = function (req, res) {
    ProductLook.find({}, function (err, message) {
        if (err)
            res.status(400).send(err);
        res.json(message);
    });
};

exports.create_new_product = function (req, res) {
    let new_product = new Product(req.body);

    new_product.save(function (err, message) {
        if (err)
            res.send(err);
        res.json(message);
    });
};

exports.get_productLookStore = function (req, res) {
    ProductLook.find({storeId: req.params.storeId}, function (err, message) {
        if (!message.length) {
            res.status(404).send("Not found");
        } else {
            //res.json(message);
            res.send(message[0].product)
        }
    });
};

exports.get_productLook = function (req, res) {
    ProductLook.find({productId: req.params.storeId}, function (err, message) {
        if (!message.length) {
            res.status(404).send("Not found");
        } else {
            res.send(message[0].product)
        }
    });
};

 exports.get_product = async function (req, res) {
    let star = 5;
    await Comment.find({productId: req.body.productId}, function (err, message) {
        if (message.length) {
            let i;
            let total = 0;
            let length = message.length;
            for (i = 0; i < length; i++) { 
                total += message[i].star;
            }
            star =  total / length;
        }
    });
    
    Product.find({productId: req.body.productId}, function (err, message) {
        if (!message.length) {
            res.status(404).send("Not found");
        } else {
            message[0].star = star;
            res.json(message);
            res.send(message[0].product)
        }
    });
};

exports.delete_a_product = function (req, res) {
    Product.remove({
        product: req.params.productId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({product: 'Product successfully deleted'});
    });
};