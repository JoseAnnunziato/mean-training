(function () {
    angular
        .module('DirectiveDemoApp', [])
        .directive('hmhResizable', hmhResizable);
    
    function hmhResizable() {

        function linkFunction(scope, element, attrs) {
            element.resizable();
        }

        return {
            link: linkFunction
        };
    }
})();