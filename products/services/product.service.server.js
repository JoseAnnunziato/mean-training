module.exports = function(app) {
    app.get("/api/product", findAllProducts);
    app.get("/api/product/:pid", findProductById);
    app.post("/api/product", createProduct);
    app.delete("/api/product/:pid", deleteProduct);
    app.put("/api/product/:pid", updateProduct);

    var mongoose = require("mongoose");
    mongoose.connect('mongodb://localhost/hmh');

    var ProductSchema = mongoose.Schema({
        name: String,
        created: {type: Date, default: Date.now}
    }, {collection: "product"});

    var ProductModel = mongoose.model("ProductModel", ProductSchema);

    // var products = [
    //     {_id: '123', name: 'R180'},
    //     {_id: '234', name: 'E3D'},
    //     {_id: '345', name: 'DM2'}
    // ];

    function updateProduct(req, res) {
        var productId = req.params['pid'];
        var product = req.body;
        ProductModel
            .update({_id: productId}, product)
            .then(function(status){
                res.send(200);
            });
        // for(var p in products) {
        //     if(products[p]._id === productId) {
        //         products[p] = product;
        //         res.send(200);
        //         break;
        //     }
        // }
    }

    function findProductById(req, res) {
        var productId = req.params['pid'];
        ProductModel
            .findById(productId)
            .then(function(product){
                res.json(product);
            });
        // for(var p in products) {
        //     if(products[p]._id === productId) {
        //         res.json(products[p]);
        //         break;
        //     }
        // }
    }

    function deleteProduct(req, res) {
        var productId = req.params['pid'];
        console.log(productId);
        ProductModel
            .remove({_id: productId})
            .then(function(status){
                res.send(200);
            });
        // for(var p in products) {
        //     if(products[p]._id === productId) {
        //         products.splice(p, 1);
        //         res.send(200);
        //         break;
        //     }
        // }
    }

    function createProduct(req, res) {
        var product = req.body;
        // products.push(product);
        // res.send(200);
        ProductModel
            .create(product)
            .then(
                function(product){
                    console.log(product);
                    res.send(200);
                }, function(err){
                    console.log(err);
                });
    }
    function findAllProducts(req, res) {
        // res.json(products);
        ProductModel
            .find()
            .then(function(products){
                console.log(products);
                res.json(products);
            });
    }
}