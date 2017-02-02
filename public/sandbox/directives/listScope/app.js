(function () {
    angular
        .module('DirectiveDemoApp', [])
        .controller('DirectiveDemoController', DirectiveDemoController)
        .directive('hmhList', listDir);
    
    function listDir() {
        return {
            template: '<ul style="color:{{color}}"><li ng-repeat="item in items">{{item.name}}</li></ul>',
            scope: {
                items: '=',
                color: '@'
            }
        };
    }

    function DirectiveDemoController($scope) {
        var vm = this;
        vm.products = [
            {name: 'R180'},
            {name: 'DTM'},
            {name: 'S44'}
        ];
        vm.red = 'green';
    }
})();