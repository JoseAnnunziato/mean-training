(function () {
    angular
        .module('DirectiveDemoApp', [])
        .directive('hmhResizable', hmhResizable)
        .directive('hmhDraggable', hmhDraggable);

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
})();