(function () {
    angular
        .module('DirectiveDemoApp', [])
        .directive('hello', helloDir);
    
    function helloDir() {
        return {
            template: '<h1>Hello World!</h1>'
        };
    }
})();