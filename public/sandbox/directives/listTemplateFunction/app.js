(function () {
    angular
        .module('DirectiveDemoApp', [])
        .controller('DirectiveDemoController', DirectiveDemoController)
        .directive('hmhList', listDir);
    
    function listDir() {

        function templateFunction(element, attrs) {
            console.log(element);
            console.log(attrs);
            var html = '<ul style="color:'+attrs.color+'"><li ng-repeat="item in items">{{item.name}}</li></ul>';
            return html;
        }

        return {
            template: templateFunction,
            scope: {
                items: '='
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