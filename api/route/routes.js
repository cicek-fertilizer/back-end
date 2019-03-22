'use strict';
module.exports = function(app) {
    const productController = require('../controller/productController');
    const commentController = require('../controller/commentController');
    const storeController = require('../controller/storeController');
    const userController = require('../controller/userController');

    //  Routes
    app.route('/stores')
        .get(storeController.list_all_stores)
        .post(storeController.create_new_store);
    
    app.route('/admin')
        .get(userController.admin_login)
    
    app.route('/store/info')
        .get(storeController.get_store);

    app.route('/users')
        .get(userController.list_all_users)
        .post(userController.create_new_user);

    app.route('/user/login')
        .post(userController.login)

    app.route('/products/')
        .get(productController.list_all_products)
        
    app.route('/product/')
        .get(productController.get_product)
        .post(productController.create_new_product)
        .delete(productController.delete_a_product);
    
    app.route('/productLook/')
        .get(productController.list_all_productLooks);
    
    app.route('/productLook/store/')
        .get(productController.get_productLookStore);
    
    app.route('/productLook/product/')
        .get(productController.get_productLook);

    app.route('/comments/')
        .post(commentController.get_comments)
        .delete(commentController.delete_a_comment);
};