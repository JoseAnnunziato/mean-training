module.exports = function(app, model) {
    app.get("/api/product", findAllProducts);
    app.get("/api/product/:pid", findProductById);
    app.post("/api/product", createProduct);
    app.delete("/api/product/:pid", deleteProduct);
    app.put("/api/product/:pid", updateProduct);

    var productModel = model.productModel;

    function updateProduct(req, res) {
        var productId = req.params['pid'];
        var product = req.body;
        productModel
            .updateProduct(productId, product)
            .then(function(status){
                res.send(200);
            });
    }

    function findProductById(req, res) {
        var productId = req.params['pid'];
        productModel
            .findProductById(productId)
            .then(function(product){
                res.json(product);
            }, function (err) {
                console.log(err);
            });
    }

    function deleteProduct(req, res) {
        var productId = req.params['pid'];
        console.log(productId);
        productModel
            .deleteProduct(productId)
            .then(function(status){
                res.send(200);
            });
    }

    function createProduct(req, res) {
        var product = req.body;
        productModel
            .createProduct(product)
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
        productModel
            .findAllProducts()
            .then(function(products){
                console.log(products);
                res.json(products);
            });
    }
}