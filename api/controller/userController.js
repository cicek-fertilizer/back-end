'use strict';

let mongoose = require('mongoose'),
    Admin = mongoose.model('admins'),
    User = mongoose.model('users');

exports.list_all_users = function (req, res) {
    User.find({}, function (err, message) {
        if (err)
            res.status(400).send(err);
        res.json(message);
    });
};

exports.login = function (req, res) {
    User.find({userName: req.body.userName, password: req.body.password}, function (err, message) {
        console.log(req.body.userName);
        console.log(req.body);
        console.log(req.body.password);
        if (err)
            res.status(400).send(err);
        if (!message.length) {
            res.status(404).send("Not found");
        } else {
            //res.json(message);
            //res.status(200).send(message[0])
            res.json(message);
        }
    });
};

exports.admin_login = function () {
    User.find({adminName: req.body.adminName, password: req.body.password}, function (err, message) {
        if (err)
            res.status(400).send(err);
        if (!message.length) {
            res.status(404).send("Not found");
        } else {
            //res.json(message);
            res.status(200).send(message[0].user.userId)
        }
        res.json(message);
    });
};

exports.create_new_user = function (req, res) {
    let new_user = new User(req.body);
    new_user.save(function (err, message) {
        if (err)
            res.send(err);
        res.json(message);
    });
};

exports.get_user = function (req, res) {
    User.find({userId: req.params.userId}, function (err, message) {
        if (!message.length) {
            res.status(404).send("Not found");
        } else {
            //res.json(message);
            res.send(message[0].user)
        }
    });
};

exports.delete_a_user = function (req, res) {
    User.remove({
        user: req.params.userId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({user: 'User successfully deleted'});
    });
};