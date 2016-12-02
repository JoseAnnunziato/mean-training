(function(){
    angular
        .module("ProductApp")
        .factory("ProductService", productService);
    
    function productService($http) {
        var api = {
            createProduct: createProduct,
            findAllProducts: findAllProducts,
            findProductById: findProductById,
            deleteProduct: deleteProduct,
            updateProduct: updateProduct
        };
        return api;


        function updateProduct(product) {
            return $http.put("/api/product/"+product._id, product);
        }
        function findAllProducts() {
            return $http.get("/api/product");
        }
        function findProductById(productId) {
            return $http.get("/api/product/"+productId);
        }
        function createProduct(product) {
            return $http.post("/api/product", product);
        }
        function deleteProduct(productId) {
            return $http.delete("/api/product/"+productId);
        }
    }
})();