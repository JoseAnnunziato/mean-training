(function(){
    angular
        .module("ProductApp")
        .controller("ProductListController", productListController)
        .controller("ProductDetailsController", productDetailsController);
    
    function productDetailsController($scope, $location, ProductService, $routeParams) {
        var productId = $routeParams.productId;

        $scope.updateProduct = updateProduct;
        $scope.deleteProduct = deleteProduct;

        ProductService
            .findProductById(productId)
            .success(function (product) {
                $scope.product = product;
            });

        function updateProduct(product) {
            ProductService
                .updateProduct(product)
                .success(function () {
                    $location.url("/product");
                })
                .error(function (err) {

                });
        }

        function deleteProduct(productId) {
            ProductService
                .deleteProduct(productId)
                .success(function () {
                    $location.url("/product");
                });
        }

    }

    function productListController($scope, ProductService) {

        $scope.addProduct = addProduct;
        $scope.deleteProduct = deleteProduct;
        $scope.editProduct = editProduct;
        $scope.updateProduct = updateProduct;

        function init() {
            findAllProducts();
        }
        init();

        function updateProduct(product) {
            ProductService
                .updateProduct(product)
                .success(findAllProducts);
        }
        
        function editProduct(productId) {
            ProductService
                .findProductById(productId)
                .success(function (product) {
                    $scope.product = product;
                });
        }
        
        function findAllProducts() {
            ProductService
                .findAllProducts()
                .success(function(products){
                    $scope.products = products;
                });
        }
        
        function addProduct (product) {
            var newProduct = angular.copy(product);
            newProduct._id = (new Date()).getTime() + '';
            ProductService
                .createProduct(newProduct)
                .success(findAllProducts);
        };
        
        function deleteProduct (product) {
            console.log(product);
            ProductService
                .deleteProduct(product._id)
                .success(findAllProducts);
        }
    }
})();