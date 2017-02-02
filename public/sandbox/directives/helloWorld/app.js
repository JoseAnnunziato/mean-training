(function () {
    angular
        .module('DirectiveDemoApp', [])
        .directive('helloWorld', helloDir);
    
    function helloDir() {
        return {
            template: '<h1>Hello World!</h1>'
        };
    }
})();