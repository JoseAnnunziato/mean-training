(function () {
    angular
        .module('DirectiveDemoApp', [])
        .directive('hmhResizable', hmhResizable)
        .controller('sortableController', sortableController)
        .directive('hmhDraggable', hmhDraggable)
        .directive('hmhSortable', hmhSortable);

    function sortableController($scope) {
        $scope.items = [
            {label: 'Item 1'},
            {label: 'Item 2'},
            {label: 'Item 3'}
        ];
    }

    function hmhDraggable() {

        function linkFunction(scope, element, attrs) {
            element.draggable();
        }

        return {
            link: linkFunction
        };
    }
    function hmhResizable() {

        function linkFunction(scope, element, attrs) {
            element.resizable();
        }

        return {
            link: linkFunction
        };
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