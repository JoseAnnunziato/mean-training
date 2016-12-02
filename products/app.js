module.exports = function(app) {
    app.get("/api/product", findAllProducts);
    app.get("/api/product/:pid", findProductById);
    app.post("/api/product", createProduct);
    app.delete("/api/product/:pid", deleteProduct);
    app.put("/api/product/:pid", updateProduct);

    var products = [
        {_id: '123', name: 'R180'},
        {_id: '234', name: 'E3D'},
        {_id: '345', name: 'DM2'}
    ];

    function updateProduct(req, res) {
        var productId = req.params['pid'];
        var product = req.body;
        for(var p in products) {
            if(products[p]._id === productId) {
                products[p] = product;
                res.send(200);
                break;
            }
        }
    }

    function findProductById(req, res) {
        var productId = req.params['pid'];
        for(var p in products) {
            if(products[p]._id === productId) {
                res.json(products[p]);
                break;
            }
        }
    }

    function deleteProduct(req, res) {
        var productId = req.params['pid'];
        console.log(productId);
        for(var p in products) {
            if(products[p]._id === productId) {
                products.splice(p, 1);
                res.send(200);
                break;
            }
        }
    }
    
    function createProduct(req, res) {
        var product = req.body;
        products.push(product);
        res.send(200);
    }
    function findAllProducts(req, res) {
        res.json(products);
    }
}