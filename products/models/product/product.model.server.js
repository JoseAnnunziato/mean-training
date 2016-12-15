module.exports = function () {

    var mongoose = require("mongoose");
    var ProductSchema = require("./product.schema.server")();
    var ProductModel = mongoose.model("ProductModel", ProductSchema);

    var api = {
        createProduct: createProduct,
        updateProduct: updateProduct,
        findProductById: findProductById,
        deleteProduct: deleteProduct,
        findAllProducts: findAllProducts
    };
    return api;
    
    function findAllProducts() {
        return ProductModel.find();
    }

    function deleteProduct(productId) {
        return ProductModel.remove({_id: productId});
    }

    function findProductById(productId) {
        return ProductModel.findById(productId);
    }
    function updateProduct(productId, product) {
        return ProductModel.update({_id: productId}, product)
    }

    function createProduct(product) {
        return ProductModel.create(product);
    }
};