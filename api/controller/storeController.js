'use strict';

let mongoose = require('mongoose'),
    Store = mongoose.model('stores');

exports.list_all_stores = function (req, res) {
    Store.find({}, function (err, message) {
        if (err)
            res.status(400).send(err);
        res.json(message);
    });
};

exports.create_new_store = function (req, res) {
    let new_store = new Store(req.body);

    new_store.save(function (err, message) {
        if (err)
            res.send(err);
        res.json(message);
    });
};

exports.get_store = function (req, res) {
    Store.find({storeId: req.body.storeId}, function (err, message) {
        if (!message.length) {
            res.status(404).send("Not found");
        } else {
            //res.json(message);
            res.send(message[0].store)
        }
    });
};

exports.delete_a_store = function (req, res) {
    Store.remove({
        store: req.body.storeId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({store: 'Store successfully deleted'});
    });
};