(function () {
    angular
        .module('DirectiveDemoApp', [])
        .controller('sortableController', sortableController)
        .directive('hmhSortable', hmhSortable);
    
    function sortableController($scope) {
        $scope.items = [
            {label: 'Item 1'},
            {label: 'Item 2'},
            {label: 'Item 3'}
        ];
    }
    
    function hmhSortable() {

        function linkFunction(scope, element, attrs) {
            element.sortable();
        }

        return {
            link: linkFunction
        };
    }
})();