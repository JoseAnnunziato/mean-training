(function () {
    angular
        .module('DirectiveDemoApp', [])
        .controller('DirectiveDemoController', DirectiveDemoController)
        .directive('hmhList', listDir);
    
    function listDir() {
        return {
            template: '<ul><li ng-repeat="product in products">{{product.name}}</li></ul>'
        };
    }

    function DirectiveDemoController($scope) {
        $scope.products = [
            {name: 'R180'},
            {name: 'DTM'},
            {name: 'S44'}
        ];
    }
})();