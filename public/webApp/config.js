(function () {
    angular
        .module("ProductApp")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when('/product', {
                templateUrl: 'products/templates/product-list.html',
                controller: 'ProductListController'
            })
            .when('/product/:productId', {
                templateUrl: 'products/templates/product-details.html',
                controller: 'ProductDetailsController'
            })
    }
})();